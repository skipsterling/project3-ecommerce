const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhhhh';
const expiration = '2h';


module.exports = {
    authMiddleware: function ({ req }) {
     // Allow token to be sent via body query or header then we spilt the string into an array and return our actual token.
      let token = req.body.token || req.query.token || req.headers.authorization;
      if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
      }
      if (!token) {
        return req;
      }
// Adding try and catch method to see if our token can varified and if so itll add the ecoded user's data to our request then it should be able to be accessed by our resolver file.
try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('This token is not valid');
  }
// This next section will return the request object then it will be passed to our resolver as context.
return req;
},
// Changed the signToken function to match our User model.
signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};