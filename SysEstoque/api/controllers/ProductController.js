/**
 * ProductControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    const params = req.body;

    try {  

      let productToCreate = {
        name: params.name,
        description: params.description,
        brand: params.brand,
        model: params.model,
        serialNumber: params.serialNumber,
        maxStock: params.maxStock,
        minStock: params.minStock,
        goodsIssueItens: params.goodsIssueItens,
        goodsReceiptItens: params.goodsReceiptItens,
      }

     const product = await Product.create(productToCreate)

      return res.status(201).json(product)
    } catch (error) {
      return res.status(500).send({ error })
    }
  }

};

