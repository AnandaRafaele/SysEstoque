module.exports={
    create: async function (req, res) {
        const name = req.body.name;
       // const state =  state[0].id;
        
        console.log('Estado: ',  await State.find(0));
        
        try {
           // await City.create({name, uf}).fetch();
            return res.send('deu certo');
           // return res.view('pages/Product/list', {products: await Product.find()});
        } catch (error) {
            console.log(error);
            return res.send({error: 'Problemas ao cadastrar o Estado'});
        }
    },


}