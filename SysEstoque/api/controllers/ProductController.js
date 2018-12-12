/**
 * ProductControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: async function (req, res) {
    try {
      const products = await Product.find().populate('supplier').populate('category');
      const categories = await Category.find()
      const suppliers = await Supplier.find()

      return res.view('product/list', { products: products, categories: categories, suppliers: suppliers, layout: 'layouts/layout' })
    } catch (error) {
      sails.log(error)
      return res.status(500).send({ error: 'Database error' });
    }
  },

  create: async function (req, res) {
    const params = req.body;
    console.log(params)
    try {
      let productToCreate = {
        name: params.name,
        description: params.description,
        brand: params.brand,
        serialNumber: params.serialNumber,
        supplier: params.supplier,
        category: params.category
        // maxStock: params.maxStock,
        // minStock: params.minStock,
        // goodsIssueItens: params.goodsIssueItens,
        // goodsReceiptItens: params.goodsReceiptItens,
      }

      const product = await Product.create(productToCreate)

      return res.redirect('/product/dashboard')
    } catch (error) {
      sails.log(error)
      return res.status(500).send({ error })
    }
  },

  delete: async function (req, res) {
    try {
      await Product.destroy({ id: req.params.id })
      return res.redirect('/product/dashboard')
    } catch (error) {
      return res.status(500).send({ error: 'Database error' });
    }
  },

  update: async function (req, res) {

    const params = req.body;
    let productId = req.params.id;

    if (!productId) {
      return res.status(400).send({ error: 'Faltando parâmetros' })
    }

    try {
      const user = await Product.update({ id: productId }, params).fetch()
      return res.redirect('/product/dashboard')
    } catch (error) {
      return res.status(500).send({ error: 'Database error' });
    }

  },

};

