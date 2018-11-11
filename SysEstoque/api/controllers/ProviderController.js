module.exports ={
    list: async function (req, res) {
        const request = require('request');
        try {
            request('https://servicodados.ibge.gov.br/api/v1/localidades/estados', function (error, response, body) {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                const ufs = JSON.parse(body);
                for (var i = 0; i < ufs.length; i++) {
                      console.log('Nome do Estado......................\n',ufs[i].nome); 
                };
                return res.view('pages/Provider/list', {ufs: ufs});
                });
                
               
        } catch (error) {
            return res.send({error:'Error ao manda a lista de UFS para a view'})
        }

    }
    

}
