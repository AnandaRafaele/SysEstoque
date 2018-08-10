module.exports = {


  friendlyName: 'List',


  description: 'List user.',


  exits: {
    serverError: {
      description: 'server error',
      responseType: 'serverError'
    }
  },


  fn: async function (inputs, exits) {

    try {
      
      const page = parseInt(this.req.query.page) - 1 || 0
      const rowsPerPage = parseInt(this.req.query.rowsPerPage) || 10
      let results = []
      let query = {}

      results = await User.find(query).limit(rowsPerPage).skip(page * rowsPerPage).sort('createdAt DESC')
      results = await sails.helpers.setResultsMeta.with({model: User, criteria: query, results, page, rowsPerPage})

      return exits.success(results)
    } catch (error) {
      return exits.serverError()
    }

  }


};
