module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {
    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true
    },

    phoneNumber: {
      type: 'string',
      minlenght: 10,
      maxlenght: 11
    },

    password: {
      type: 'string',
      required: true
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

    try {

      const {
        name,
        email,
        phoneNumber,
        password
      } = inputs

      const foundedEmail = await User.findOne({ email })
      if (foundedEmail) return exits.repetedEmail()

      const user = await User.create({
        name,
        email,
        phoneNumber,
        password
      }).fetch()
      console.log(user)

      return exits.success(user);
    } catch (error) {
      return exits.serverError();
    }

  }


};
