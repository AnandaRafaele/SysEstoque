const jwt = require('jsonwebtoken');

module.exports = {

    friendlyName: 'Get user',

    description: 'Get user by token',

    inputs: {
        token: {
            description: 'user token',
            type: 'string',
            required: true
        },
    },

    exits: {
        notFound: {
            description: 'error login',
            responseType: 'notFound'
        },
    },

    fn: async function (inputs, exits) {

        const { token } = inputs;

        try {
            let decoded = jwt.decode(token)
            return exits.success(decoded)
        } catch (error) {

        }



    }

}
