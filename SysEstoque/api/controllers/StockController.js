/**
 * StockController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    const params = req.body;
    try {
      let stockToCreate = {
        minQuantity: params.minQuantity,
        valUnit: params.valUnit,
        valTotal: params.valTotal,
        product: params.product,
        quantity: params.quantity,
      }
      await Stock.create(stockToCreate)

      return res.redirect('/stock')
    } catch (error) {
      sails.log(error)
      return res.status(500).send({ error: "Dataserver error" })
    }
  },

  list: async function (req, res) {
    try {
      const stocks = await Stock.find().populate('product');
      const products = await Product.find();
      return res.view('stock/stock', { stocks: stocks, products:products, layout: 'layouts/layout' })
    } catch (error) {
      return res.view('500');
    }
  },

  delete: async function (req, res) {
    try {
      await Stock.destroy({ id: req.params.id })
      return res.redirect('/stock')
    } catch (error) {
      return res.view('500');;
    }
  },

};

