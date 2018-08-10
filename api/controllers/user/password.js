module.exports = {


  friendlyName: 'Password',


  description: 'Password user.',


  inputs: {
    oldPassword: {
      description: 'old user password',
      type: 'string',
      required: true

    },

    newPassword: {
      description: 'new user password',
      type: 'string',
      required: true
    }
  },


  exits: {
    notFound: {
      description: 'not found',
      responseType: 'notFound'
    },

    serverError: {
      description: 'server error',
      responseType: 'serverError'
    }
  },


  fn: async function (inputs, exits) {

    try {

      if (!this.req.headers.authorization) return exits.notFound();

      const user = await sails.helpers.currentUser(this.req.headers.authorization);
      console.log(user)
      const { oldPassword, newPassword } = inputs;

      const result = await sails.helpers.cipherCompare(oldPassword, user.password)

      if (!result) return exits.notFound();

      await User.update({ id: user.id }, { password: newPassword }).fetch()
      return exits.success({msg: 'Senha atualizada com sucesso!'})
      
    } catch (error) {
      return exits.serverError(error)
    }
  }


};
