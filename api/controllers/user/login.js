module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    email: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    }
  },


  exits: {
    notFound: {
      description: 'Login Error',
      responseType: 'notFound'
    },
    wrongPassword: {
      description: 'Password dont match',
      responseType: 'badRequest'
    },

    serverError: {
      description: 'error login',
      responseType: 'serverError'
    }

  },


  fn: async function (inputs, exits) {

    const {
      email,
      password
    } = inputs

    try {

      const user = await User.findOne({ email })
      if (!user) return exits.notFound()

      const passwordMatch = await sails.helpers.cipherCompare(password, user.password)
      console.log(passwordMatch)
      if (!passwordMatch) return exits.wrongPassword()

      const token = await sails.helpers.authToken(user)
      if (token) {
        return exits.success({ token, user })
      } else {
        return exits.notFound()
      }

    } catch (error) {
      return exits.serverError();
    }

  }


};
