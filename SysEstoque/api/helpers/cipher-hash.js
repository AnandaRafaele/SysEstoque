const bcrypt = require('bcryptjs');

module.exports = {

  friendlyName: 'Chipher helper',

  description: 'Chipher helper for password user and others',

  inputs: {
    password: {
      description: 'user password',
      type: 'string',
      required: true
    }
  },

  exits: {
    serverError: {
      description: 'server error',
      responseType: 'serverError'
    }
  },

  fn: async function (inputs, exits) {

    const { password } = inputs;

    try {
      const hash = await bcrypt.hash(password, 10)
      return exits.success(hash)
      
    } catch (error) {
      return exits.serverError();
    }

  }

}
