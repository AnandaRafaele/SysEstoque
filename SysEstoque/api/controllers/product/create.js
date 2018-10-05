module.exports = {


  friendlyName: 'Create',


  description: 'Create product.',


  inputs: {
    name: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string'
    },

    brand: {
      type: 'string',
      required: true
    },

    model: {
      type: 'string',
      required: true
    },

    serialNumber: {
      type: 'number',
      required: true
    },

    maxStock: {
      type: 'number'
    },

    minStock: {
      type: 'number',
      required: true
    },

    goodsIssueItens: {
      type: 'string'
    },

    goodsReceiptItens: {
      type: 'string'
    }
  },


  exits: {
    serverError: {
      description: 'server error',
      responseType: 'serverError'
    }
  },


  fn: async function (inputs, exits) {

    const {
      name,
      description,
      brand,
      model,
      serialNumber,
      maxStock,
      minStock,
      goodsIssueItens,
      goodsReceiptItens
    } = inputs;

    try {

      const user = this.req.sender;

      switch (user) {
        case 'employee':

          break;

        case 'administrator':

          break;
        default:
          break;
      }

      return exits.success();
    } catch (error) {
      return exits.serverError();
    }

  }


};
