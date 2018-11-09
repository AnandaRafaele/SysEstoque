    module.exports = {
    create: async function (req, res) {
        const name = req.body.name;
        const description = req.body.description;
        const brand = req.body.brand;
        const model = req.body.model;
        const serialNumber = req.body.serialNumber;
        
        const product = {
            name,  description,  brand, model, serialNumber
        }
       
        if (typeof product === null) {
           return res.send('Preencha todos os campos!');
       }
       console.log('Número de série: ', serialNumber);
        try {
            await Product.create({name, description, brand, model, serialNumber}).fetch();
            return res.send('Cadastrou o produto');
        } catch (error) {
            console.log(error);
            return res.send('Deu merda');
        }
    },
    
    list: async function (req, res) {
      try {
          const products = await Product.find();
          return res.view('pages/Product/list', {products: products});
      } catch (error) {
          return  res.send('Error ao listar os produtos')
      }  
    },

    edit: async function (req,res){
        const idProduct = req.param('id');
        try {
            const product = await Product.findOne({id: idProduct});
            return res.view('pages/Product/edit',{product: product});
        } catch (error) {
            console.log(error);
            return res.send({error:'Error ao procurar um produto.'})
        }
    },

    update: async function(req, res){
        const name = req.body.name;
        const description = req.body.description;
        const brand = req.body.brand;
        const model = req.body.model;
        const serialNumber = req.body.serialNumber;
        const product = {
            name,  description,  brand, model, serialNumber
        }
       
        if (typeof product === null) {
           return res.send('Preencha todos os campos!');
       }
        try {
            await Product.update({id: req.params.id},{name, description, brand, model, serialNumber});
            return res.send('Atualizou o produto');

        } catch (error) {
            console.log(error);
            return res.send('Deu merda');
        }
        return false;
    },
    
    delete: async function(req, res){
        try {
            await Product.destroy({id: req.params.id});
            return res.send('Excluiu o produto');
        } catch (error) {
            console.log(error);
            return res.send('Deu Merda');

        }
    },
}