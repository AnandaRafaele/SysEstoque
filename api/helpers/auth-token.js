const jwt = require('jsonwebtoken');

module.exports = {

    friendlyName: 'Generate auth token',

    description: 'Generate token for authentication using jsonwebtoken',

    inputs: {
        user: {
            description: 'user data to encrypt',
            type: 'ref',
            required: true
        }
    },

    exits: {
        serverError: {
            description: 'error login',
            responseType: 'serverError'
        }
    },

    fn: async function (inputs, exits) {
        
        const secret = await sails.helpers.getConstants('secret');

        const { user } = inputs;

        try {
            let token = await jwt.sign(user, secret, {algorithm: 'HS256'});
            return exits.success(token)
        } catch (err) {
            return exits.serverError(err);
        }
    }

}
