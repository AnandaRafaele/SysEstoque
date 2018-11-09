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
       console.log('nome: ',name);
        if (typeof(product) === null) {
            res.send({error: 'Campos vazios'})
        }
     
        try {
            await Product.create({product});
            return res.send('Cadastrou o produto');
        } catch (error) {
            console.log(error);
            return res.send('Deu merda');
        }
    },

    list: async function (req, res){
        try {
            const products = await Product.find();
            res.view('/pages/Product/list', {products: products});
        } catch (error) {
            res.send({error: 'Listagem dos Produtos'});
        }
    },
    
}