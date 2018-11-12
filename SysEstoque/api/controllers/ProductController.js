/**
 * ProductControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function (req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const brand = req.body.brand;
    const model = req.body.model;
    const serialNumber = req.body.serialNumber;
    const maxStock = req.body.maxStock;
    const minStock = req.body.minStock;
    const goodsIssueItens = req.body.goodsIssueItens;
    const goodsReceiptItens = req.body.goodsReceiptItens;

    try {
      const user = req.sender;
      if (!user) { return res.status(404).send({ error: 'O usuário não tem permissão para acessar esta área' }) }

      await Product.create({
        name,
        description,
        brand,
        model,
        serialNumber,
        maxStock,
        minStock,
        goodsIssueItens,
        goodsReceiptItens,
        user,
      }).fetch();

      return res.redirect('/user/list')
    } catch (error) {
      return res.status(500).send({ error })
    }
  }

};

