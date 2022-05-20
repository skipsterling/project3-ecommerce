const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
  
    const categories = await Category.insertMany([
      { name: 'Apparel' },
      { name: 'Accessories' }
    ]);
  
    console.log('All categories have now been seeded');
  
    await Product.deleteMany();
  
    const products = await Product.insertMany([
      {
        name: 'MESSENGER TEE',
        description:
          'Sending our message around the world. Travel, have fun and enjoy life 🤙 100% cotton, Oversize Fit, Crew neck',
        image: 'MESSENGER-TEE.jpg',
        category: categories[0]._id,
        price: 39.95,
        quantity: 200
      },
      {
        name: 'GVC',
        description:
          'The GVC Tee - Featuring a statement text print, this fit represents our company to a T. GVC stands for Good Vibes Crew - and thats who we are. Being apart of the crew means that you love having fun, supporting a positive mindset and leading an epic life. 100% cotton, Oversize Fit, Crew neck',
        image: 'GVC.jpg',
        category: categories[0]._id,
        price: 39.95,
        quantity: 200
      },
      {
        name: 'SKARAB TEE',
        category: categories[0]._id,
        description:
          'I know, I know... What the F#$K is a Skrab? Its a Skull crab!! Inspiring our new masterpiece. All thanks to our incredible artist and graphic designer. Dont miss this one! 100% cotton, Oversize Fit, Crew neck',
        image: 'SKRAB.jpg',
        price: 39.95,
        quantity: 200
      },
      {
        name: 'WEEKENDER TEE',
        category: categories[0]._id,
        description:
          'Sea, sand, sun and surf - This is what we live for 🤙 100% cotton, Oversize Fit, Crew neck',
        image: 'WEEKENDER-TEE.jpg',
        price: 39.95,
        quantity: 200
      },
      {
        name: 'SIGNATURE CORDUROY SNAP BACK',
        category: categories[1]._id,
        description:
          'Were taking you back to the 90s! Shuks Industries presents its first corduroy snap back. Old school becomes New school 😎 Medium profile snap back, 6 panel cap,Adjustable plastic fastener, Flat Peak, 100% Corduroy, One size fits all, Embroidered logo',
        image: 'SCSBY.jpg',
        price: 29.95,
        quantity: 100
      },
      {
        name: 'SHUKS CLASSIC 5 PANEL CAP',
        category: categories[1]._id,
        description:
          'Check out these epic 5 Panel Caps! Killer style and ultimate comfort, low profile and ready to rock with any outfit. Low profile 5 panel cap, Adjustable plastic fastener, metal side eyelets, Flat Peak, 100% cotton, One size fits all, Available in 3 colours',
        image: 'SHUKS-CLASSIC-5-PANEL-CAP.jpg',
        price: 29.95,
        quantity: 100
      },
      {
        name: 'SHUKS INDUSTRIES TRUCKER SNAP BACK',
        category: categories[1]._id,
        description:
          'This is a trucker with real depth and real fit. No BS, easy to wear. Designed to fit all head sizes, for any occasions! High profile snap back, Mesh back, Adjustable plastic fastener, Flat Peak, 100% Acrylic, One size fits all, Embroidered logo',
        image: 'SHUKS-INDUSTRIES-TRUCKER-SNAP-BACK.jpg',
        price: 29.95,
        quantity: 100
      },
      {
        name: 'GOOD VIBES STUBBIE COOLER',
        category: categories[1]._id,
        description:
          'Custom stubbie cooler for keeping those drinks cold all year round. Who doesnt love a good sesh? Neoprene material, Flat design for easy travel and storage, 12.5 x 10.5cm',
        image: 'GOOD-VIBES-STUBBIE-COOLER.jpg',
        price: 4.95,
        quantity: 100
      },
      {
        name: 'CHILL CREW SOCKS',
        category: categories[1]._id,
        description: 'Comfortable is a must in the foot department. So we took our time to design these for maximum comfort and minimal movement on your feet. ',
        image: 'CHILL-CREW-SOCKS.jpg',
        price: 9.95,
        quantity: 50
      },
      {
        name: 'GOOD VIBES CREW SNAP BACK',
        category: categories[1]._id,
        description:
          'Become apart of the GOOD VIBES CREW with this epic snap back. Wear anywhere, anytime, wet or dry 🤙 GET IT, WEAR IT, LOVE IT!! Medium profile 5 panel cap, Adjustable plastic snap back fastener, Flat Peak, 100% Nylon quick dry, One size fits all,Embroidered logo',
        image: 'GOOD-VIBES-CREW-SNAP-BACK.jpg',
        price: 29.95,
        quantity: 100
      },
      {
        name: 'BELLS CLASSIC HOODIE',
        category: categories[0]._id,
        description:
          'Our SHUKS Classics have been created with style and epic comfort in mind and are named after the most iconic Aussie beaches. Regular fit, Pull over hood, with draw-cord, Kangaroo pocket, Pre-shrunk to minimise shrinkage, 80% cotton, 20% polyester anti-pill fleece ',
        image: 'BELLS-CLASSIC-HOODIE.jpg',
        price: 79.95,
        quantity: 100
      },
      {
        name: 'BYRON CLASSIC LONG SLEEVE TEE',
        category: categories[0]._id,
        description:
          'Our SHUKS Classics have been created with style and epic comfort in mind and are named after the most iconic Aussie beaches. 100% Cotton, Longer Body, Cuffed sleeves, Slight Drop at back, Pre Shrunk to minimise shrinkage',
        image: 'BYRON-CLASSIC-LONG-SLEEVE-TEE.jpg',
        price: 39.95,
        quantity: 200
      }
    ]);
  
    console.log('All products have now been seeded');
  
    await User.deleteMany();
  
    await User.create({
      firstName: 'Thomas',
      lastName: 'James',
      email: 'thomas@gmail.com',
      password: 'test12345',
      orders: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id]
        }
      ]
    });
  
    await User.create({
      firstName: 'Skip',
      lastName: 'Sterling',
      email: 'skip@gmail.com',
      password: 'test12345'
    });
  
    console.log('All users have now been seeded.');
  
    process.exit();
  });