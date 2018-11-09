    module.exports = {
    create: async function (req, res) {
        const name = req.body.name;
        const description = req.body.description;
        const brand = req.body.brand;
        const model = req.body.model;
        const serialNumber = req.body.serialNumber;
        
        try {
            await Product.create({name, description, brand, model, serialNumber}).fetch();
            return res.view('pages/Product/list', {products: await Product.find()});
        } catch (error) {
            console.log(error);
            return res.send({error: 'Problemas ao cadastrar o produto'});
        }
    },
    
    list: async function (req, res) {
      try {
          return res.view('pages/Product/list', {products: await Product.find()});
      } catch (error) {
          return  res.send({error:'Probelmas ao listar os produtos'});
      }  
    },

    edit: async function (req,res){
        const idProduct = req.param('id');
        try {
            const product = await Product.findOne({id: idProduct});
            return res.view('pages/Product/edit',{product: product});
        } catch (error) {
            console.log(error);
            return res.send({error:'Problemas ao procurar um produto.'})
        }
    },

    update: async function(req, res){
        const name = req.body.name;
        const description = req.body.description;
        const brand = req.body.brand;
        const model = req.body.model;
        const serialNumber = req.body.serialNumber;
       
        try {
            await Product.update({id: req.params.id},{name, description, brand, model, serialNumber});
            return res.redirect('/product/list');
        } catch (error) {
            console.log(error);
            return res.send({error: 'Problemas ao atualizar o produto'});
        }
    },
    
    delete: async function(req, res){
        try {
            await Product.destroy({id: req.params.id});
            return res.redirect('/product/list');
        } catch (error) {
            console.log(error);
            return res.send({error: 'Problemas ao deletar um produto'});

        }
    },
}