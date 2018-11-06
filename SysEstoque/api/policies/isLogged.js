module.exports = async function (req, res, proceed) {

    if (req.headers && req.headers.authorization) {
        
        const userDecoded = await sails.helpers.currentUser(req.headers.authorization);
        if(!userDecoded) {
            return res.forbidden({
                message: 'A autenticação foi recusada por erro de credencial.'
            });
        }
        
        const user = await User.findOne({id: userDecoded.id});

        if(user && userDecoded.accessLever == user.accessLevel) {
            req.sender = user;
            return proceed();
        } else {
            //SocketService.invalidCredentials(req);
            return res.forbidden({
                message: 'Você precisa fazer o login para prosseguir com essa ação.'
            });
        }
        
    
    } else {
         //SocketService.invalidCredentials(req);
		return res.forbidden({
			message: 'Você precisa fazer o login para prosseguir com essa ação.'
		});
    }
   

}
