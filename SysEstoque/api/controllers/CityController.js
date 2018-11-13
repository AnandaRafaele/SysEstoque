/**
 * CityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    const params = req.body;
    try {
      const city = await City.create({ name: params.name, state: params.state }).fetch()
      return res.status(201).json(city)
    } catch (error) {
      return res.status(400).send({ error: 'Database error' })
    }
  }
};

