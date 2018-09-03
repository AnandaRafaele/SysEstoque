module.exports = {
  friendlyName: 'Set results meta data',

  description: '',

  inputs: {
    model: {
      friendlyName: 'Model',
      type: 'ref',
      description: 'A reference to the model object (model).',
      required: true
    },
    criteria: {
      friendlyName: 'Find Criteria',
      type: 'ref',
      description: 'Criteria object to search',
      required: true
    },
    results: {
      friendlyName: 'Results list',
      type: 'ref',
      description: 'A referente to the results list',
      required: true
    },
    page: {
      type: 'number',
      required: true
    },
    rowsPerPage: {
      type: 'number',
      required: true
    },
    total: {
      type: 'number'
    },
    extra: {
      type: 'ref'
    }
  },

  exits: {
    success: {
      responseType: 'number'
    }
  },

  fn: async (inputs, exits) => {
    let obj = {
      data: inputs.results,
      meta: {
        actualPage: inputs.page + 1,
        nextPage: inputs.page + 2,
        perPage: inputs.rowsPerPage,
        total: inputs.total || await sails.helpers.modelCount.with({model: inputs.model, criteria: inputs.criteria})
      }
    }
    if (inputs.extra) obj.meta.extra = inputs.extra
    return exits.success(obj)
  }
}
