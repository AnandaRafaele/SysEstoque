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
            console.log(product);
            return res.view('pages/Product/edit',{product: product});
        } catch (error) {
            console.log(error);
            return res.send({error:'Error ao procurar um produto.'})
        }
    },

    update: async function (req, res){
        console.log(req.body);
        const idProduct = req.param('id');
        const name = req.body.name;
        const description = req.body.description;
        const brand = req.body.brand;
        const model = req.body.model;
        const serialNumber = req.body.serialNumber;
        const product = {
            name,  description,  brand, model, serialNumber
        }
        //ta dando error aqui
        try {
            await Product.update({idProduct}, { name, description, brand, model, serialNumber});
            console.log(product.description);
            return res.redirect('/user/list');
        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }

    },

}