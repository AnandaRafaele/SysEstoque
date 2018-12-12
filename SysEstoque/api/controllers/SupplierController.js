/**
 * SupplierController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    try {
      const objSupplier = req.body;

      // let addressToCreate = {
      //   street: objSupplier.address.street,
      //   number: objSupplier.address.number,
      //   neighborhood: objSupplier.address.neighborhood,
      //   city: objSupplier.address.city
      // }
      let supplierToCreate = {
        company: objSupplier.company,
        tradeName: objSupplier.tradeName,
        cnpj: objSupplier.cnpj,
        stateRegistration: objSupplier.stateRegistration,
        phoneNumber: objSupplier.phoneNumber,
        email: objSupplier.email,
        representative: objSupplier.representative,
      }

      // const createdAddress = await Address.create(addressToCreate).fetch();
      // console.log(createdAddress)
      // supplierToCreate.address = createdAddress.id;
      const supplier = await Supplier.create(supplierToCreate).fetch();
      return res.redirect('/supplier/dashboard')
    } catch (error) {
      sails.log(error)
      return res.status(404).send({ error: 'Database error' })
    }
  },

  list: async function (req, res) {
    try {
      const suppliers = await Supplier.find();
      return res.view('supplier/list', { suppliers: suppliers, layout: 'layouts/layout' })
    } catch (error) {
      return res.status(404).send({ error: 'Database error' })
    }
  },

  delete: async function (req, res) {
    try {
      await Supplier.destroy({ id: req.params.id })
      return res.redirect('/supplier/dashboard')
    } catch (error) {
      return res.status(500).send({ error: 'Database error' });
    }
  },

  update: async function (req, res) {

    const params = req.body;
    let supplierId = req.params.id;

    if (!supplierId) {
      return res.status(400).send({ error: 'Faltando parâmetros' })
    }

    try {
      const user = await Supplier.update({ id: supplierId }, params).fetch()
      return res.redirect('/supplier/dashboard')
    } catch (error) {
      return res.status(500).send({ error: 'Database error' });
    }

  },

};

