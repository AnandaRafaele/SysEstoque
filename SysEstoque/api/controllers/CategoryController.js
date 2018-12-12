/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  list: async function (req, res) {
    try {
      const categories = await Category.find().populate('category');
      return res.view('category/list',{categories:categories})
    } catch (error) {
      return res.status(500).send({ error: 'Database error' });
    }
  },

  create: async function (req, res) {
    const params = req.body

    try {
      if(!params.name) {return res.status(500).send({ error: 'Database error' })}

      const category = await Category.create({name: params.name}).fetch()
      return res.json(category)
    } catch (error) {
      return res.status(500).send({ error: 'Database error' });
    }
  }

};

