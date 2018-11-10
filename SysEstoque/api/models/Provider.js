module.exports= {
/**
 *  Razão Social, Nome de Fantasia, CNPJ, Inscrição Estadual, Endereço, Telefone, e-mail, Representante.
 */
attributes:{
    socialName:{
        type: 'string',
        required: true,
    },
    cnpj:{
        type: 'number',
        required: true,
        unique: true,
        //testar isso aqui https://www.npmjs.com/package/cpf_cnpj
        custom: function(value){
            const cnpj = require("cpf_cnpj").CNPJ;
            return cnpj.isValid(value);
        },
    },
    stateRegistration:{
        type: 'number',
        required: true,
        unique: true,
        //testar isso a qui https://www.npmjs.com/package/br-validations
        custom: function(value){
        },
    },
    address:{
        model:'address',
        unique: true,
    },
    telephone:{
        type:'string',
        required: true,
        unique:true,
    },
    email:{
        type:'string',
        isEmail: true,
        required: true,
    },
    representative:{
        type:'string',
        required: true
    },

}



}