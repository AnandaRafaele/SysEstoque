/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  create: async function (req, res) {
    try {
      const params = req.body;
      console.log(params)
      // let addressToCreate = {
      //   street: params.address.street,
      //   number: params.address.number,
      //   neighborhood: params.address.neighborhood,
      //   city: params.address.city
      // }
      let customerToCreate = {
        

        company: params.company,
        tradeName: params.tradeName,
        cnpj: params.cnpj,
        stateRegistration: params.stateRegistration,
        phoneNumber: params.phoneNumber,
        email: params.email,
        representative: params.representative,
      }

      // const createdAddress = await Address.create(addressToCreate).fetch();
      // console.log(createdAddress)
      // supplierToCreate.address = createdAddress.id;
      const customer = await Customer.create(customerToCreate).fetch();
      return res.redirect('/customer')
    } catch (error) {
      sails.log(error)
      return res.view('500');
    }
  },

  list: async function (req, res) {
    try {
      const customers = await Customer.find();
      return res.view('customer/customer', { customers: customers, layout: 'layouts/layout' })
    } catch (error) {
      return res.view('500');
    }
  },

  delete: async function (req, res) {
    try {
      await Customer.destroy({ id: req.params.id })
      return res.redirect('/customer')
    } catch (error) {
      return res.view('500');
    }
  },

  update: async function (req, res) {

    const params = req.body;
    let customerId = req.params.id;

    if (!supplierId) {
      return res.status(400).send({ error: 'Faltando parâmetros' })
    }

    try {
      await Supplier.update({ id: customerId }, params).fetch()
      return res.redirect('/customer')
    } catch (error) {
      return res.view('500');
    }
  },
};

