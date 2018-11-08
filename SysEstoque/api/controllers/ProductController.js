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
       
        if (typeof product) {
           return res.send('Preencha todos os campos!');
       }
        try {
            await Product.create({product});
            return res.send('Cadastrou o produto');
        } catch (error) {
            console.log(error);
            return res.send('Deu merda');
        }
    }
    
}