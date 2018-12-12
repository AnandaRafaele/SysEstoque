/**
 * StateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    const name = req.body.name
    try {
      const stateCreated = await State.create({name}).fetch()
      return res.status(201).json(stateCreated)
    } catch (error) {
      return res.status(400).send({ error: 'Database error' })
    }
  }
};

