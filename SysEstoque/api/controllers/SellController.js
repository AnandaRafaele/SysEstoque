/**
 * SellController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    try {
      const objSell = req.body;

      // let addressToCreate = {
      //   street: objSell.address.street,
      //   number: objSell.address.number,
      //   neighborhood: objSell.address.neighborhood,
      //   city: objSell.address.city
      // }
      let sellToCreate = {
        company: objSell.company,
        tradeName: objSell.tradeName,
        cnpj: objSell.cnpj,
        stateRegistration: objSell.stateRegistration,
        phoneNumber: objSell.phoneNumber,
        email: objSell.email,
        representative: objsell.representative,
      }

      // const createdAddress = await Address.create(addressToCreate).fetch();
      // console.log(createdAddress)
      // sellToCreate.address = createdAddress.id;
      const sell = await Sell.create(sellToCreate).fetch();
      return res.redirect('/sell')
    } catch (error) {
      sails.log(error)
      return res.view('500');
    }
  },

  list: async function (req, res) {
    try {
      const sells = await Sell.find();
      const products = await Product.find();
      return res.view('sell/sell', { sells: sells, products:products, layout: 'layouts/layout' })
    } catch (error) {
      return res.view('500');
    }
  },

  delete: async function (req, res) {
    try {
      await Sell.destroy({ id: req.params.id })
      return res.redirect('/Sell')
    } catch (error) {
      return res.view('500');;
    }
  },

  update: async function (req, res) {

    const params = req.body;
    let sellId = req.params.id;

    if (!sellId) {
      return res.status(400).send({ error: 'Faltando parâmetros' })
    }

    try {
      const user = await Sell.update({ id: sellId }, params).fetch()
      return res.redirect('/sell')
    } catch (error) {
      return res.view('500');;
    }

  },

};

