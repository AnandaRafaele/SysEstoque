const bcrypt = require('bcryptjs');

module.exports = {

    friendlyName: 'Compare hash',

    description: 'Compare hash with bcrypt',

    inputs: {
        password: {
            description: 'password in text plain',
            type: 'string',
            required: true
        },
        userPassword: {
            description: 'user password hashed',
            type: 'string',
            required: true
        }
    },

    exits: {
        serverError: {
            description: 'error in compare password',
            responseType: 'serverError'
        }
    },

    fn: async function (inputs, exits) {

        const { password, userPassword } = inputs;

        try {
            let match = await bcrypt.compare(password, userPassword)
            console.log(password, userPassword)
            return exits.success(match)
        } catch (err) {
            return exits.serverError(err)
        }
    }

}
