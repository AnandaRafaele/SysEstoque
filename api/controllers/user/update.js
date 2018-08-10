module.exports = {


  friendlyName: 'Update',


  description: 'Update user.',


  inputs: {
    id: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string'
    },

    name: {
      type: 'string'
    }
  },


  exits: {
    serverError: {
      description: 'server error',
      responseType: 'serverError'
    },

    repetedEmail: {
      description: 'repeated email',
      responseType: 'badRequest'
    }
  },


  fn: async function (inputs, exits) {

    const {
      id,
      email,
      name
    } = inputs

    try {

      if (email) {
        const foundedEmail = await User.findOne({ email })
        if (foundedEmail) return exits.repetedEmail()
      }

      const user = await User.update({ id }, {
        email,
        name
      }).fetch()

    return exits.success(user);
  } catch(error) {
    return exits.serverError();
  }

}


};
