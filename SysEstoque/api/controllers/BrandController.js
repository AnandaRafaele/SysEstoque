/**
 * BrandController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  list: async function (req, res) {
    try {
      const brands = await Brand.find().populate('category');
      return res.view('control/control',{brands:brands, layout: 'layouts/layout' })
    } catch (error) {
      return res.view('500');
    }
  },

  create: async function (req, res) {
    const params = req.body

    try {
      const brand = await Brand.create({name: params.name, category: params.category }).fetch()
      
      return res.redirect('/controle')
    } catch (error) {
      return res.view('500');
    }
  },

  delele: async function (req, res) {
    try {
      await Brand.destroy({ id: req.params.id })
      return res.redirect('/controle')
    } catch (error) {
      return res.view('500');
    }
  }

};

