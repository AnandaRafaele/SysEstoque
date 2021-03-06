/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: async function (req, res) {
    try {
      const categories = await Category.find();
      const brands = await Brand.find().populate('category');
      return res.view('control/control', { categories: categories, brands: brands, layout: 'layouts/layout' })
    } catch (error) {
      sails.log(error);
      return res.view('500');
    }
  },

  create: async function (req, res) {
    const params = req.body

    try {
      const category = await Category.create({ name: params.name }).fetch()

      return res.redirect('/controle')
    } catch (error) {
      return res.view('500');
    }
  },

  delete: async function (req, res) {
    try {
      await Category.destroy({ id: req.params.id })
      return res.redirect('/controle')
    } catch (error) {
      return res.view('500');
    }
  }

};

