module.exports = {
  friendlyName: 'Count model objects',

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
    }
  },

  exits: {
    success: {
      responseType: 'number'
    }
  },

  fn: async (inputs, exits) => {
    let count = await inputs.model.count(inputs.criteria).meta({makeLikeModifierCaseInsensitiveInMongo: true})
    return exits.success(count)
  }
}
