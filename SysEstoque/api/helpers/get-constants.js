module.exports = {


    friendlyName: 'Get constants',
  
  
    description: 'get constants by parameter',
  
  
    inputs: {
      keyConst: {
        type: 'string'
      }
    },
  
  
    exits: {
    
    },
  
    fn: async function (inputs, exits) {
      
      switch(inputs.keyConst) {
        case 'secret': return exits.success('196FFB884D2749D21D53612706E7BA12914DCBC0E10DD43E3637422FB76C3058');
      }
    
    }
  
  
  };
  