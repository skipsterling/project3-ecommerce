const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const stripe = ('stripe')('sk_test_51L10skFcX4c4Cq5QpUH2kP38nQcH4LGjFFRa9SMRtPlI9fw9XPyXnnblz3kuh8UQ97Khc9uMMqFehuch180hX8Rh00tVhVtSnY');

const resolvers = {
    Query: {
      categories: async () => {
        return await Category.find();
      },
      products: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Product.find(params).populate('category');
      },
      product: async (parent, { _id }) => {
        return await Product.findById(_id).populate('category');
      },
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'category'
          });
  
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return user;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'category'
          });
  
          return user.orders.id(_id);
        }
  
        throw new AuthenticationError('Not logged in');
      };

      // adding stripe checkout.
      checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        const line_items = [];
        const { products } = await order.populate('products').execPopulate();
        for (let i =0; i < products.length; i++) {
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images${products[i].image}`]
          });

          const price = await stripe.prices.create({
            product: product.id,
            unit_amount:products[i].price * 100,
            currency: 'aud',
          });
          // using line_items to send it to stripe.
          line_items.push({
            price: price.id,
            quantity: 1
          });
        }
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
        return { session: session.id };
      }
    },
      module.exports = resolvers;