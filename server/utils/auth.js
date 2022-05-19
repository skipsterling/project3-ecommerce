const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '1h';

module. exports = {
    signToken: function ({ email, name, _id }) {
        const payload = ({ email, name, _id });
        return jwt.sign({ data: payload }, secret, { expiration: expiration });
    },
};