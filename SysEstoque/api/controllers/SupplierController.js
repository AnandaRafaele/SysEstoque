/**
 * SupplierController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  async create(req, res) {
    try {
      const objSupplier = req.body;

      let addressToCreate = {
        street: objSupplier.address.street,
        cep: objSupplier.address.cep,
        number: objSupplier.address.number,
        neighborhood: objSupplier.address.neighborhood,
        city: objSupplier.address.city
      }

      let supplierToCreate = {
        company: objSupplier.company,
        tradeName: objSupplier.tradeName,
        cnpj: objSupplier.cnpj,
        stateRegistration: objSupplier.stateRegistration,
        phoneNumber: objSupplier.phoneNumber,
        email: objSupplier.email,
        representative: objSupplier.representative,
      }

      const createdAddress = await Address.create(addressToCreate);
      supplierToCreate.address = createdAddress.id;
      const supplier = await Supplier.create(supplier)
      return res.status(201).json(supplier)
    } catch (error) {
      return res.status(404).send({ error: 'Database error' })
    }
  }

};

