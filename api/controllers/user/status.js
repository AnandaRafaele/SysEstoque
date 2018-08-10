module.exports = {


  friendlyName: 'Status',


  description: 'Status user.',


  inputs: {
    id: {
      type: 'string',
      required: true
    },

    status: {
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

    const { id, status } = inputs

    try {
      const user = await User.update({ id }, { status }).fetch()
      return exits.success(user);
    } catch (error) {
      return exits.serverError();
    }


  }


};
