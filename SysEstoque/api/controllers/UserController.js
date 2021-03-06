const localStorage = require('localStorage')

module.exports = {
    list: async function (req, res) {
        try {
            const users = await User.find();
            return res.view('user/user', {users: users, layout: 'layouts/layout'})
        } catch (error) {
            return res.view('500');
        }
    },

    signup: async function (req, res) {
        const params = req.body;
        try {

            if (!params.password) {
                return res.status(400).send({ error: 'Alguns parâmetros estão faltando ser preenchidos' })
            }

            if (params.phoneNumber.length > 11 || params.phoneNumber.length < 10) {
                return res.status(400).send({ error: 'O número do telefone está incorreto' })
            }

            let userToCreate = {
                name: params.name,
                email: params.email,
                phoneNumber: params.phoneNumber,
                password: params.password,
                status: params.status,
                accessLevel: params.accessLevel
            }

            const user = await User.create(userToCreate).fetch();
            return res.redirect('/user')
        } catch (error) {
            sails.log(error)
            return res.view('500');;
        }
    },

    delete: async function (req, res) {

        try {
            await User.destroy({ id: req.params.id })
            return res.redirect('/user')
        } catch (error) {
            return res.view('500');;
        }
    },

    update: async function (req, res) {

        const params = req.body;
        let userId = req.params.id;

        if (!userId) {
            return res.status(400).send({ error: 'Faltando parâmetros' })
        }

        try {
            const user = await User.update({ id: userId }, params).fetch()
            return res.redirect('/user')
        } catch (error) {
            return res.view('500');;
        }

    },

    login: async function (req, res) {
        const params = req.body;
        try {
            const user = await User.findOne({ email: params.email });

            if (!user) { return res.status(400).send({ error: 'Usuário não existe' }); }

            const passwordMatch = await sails.helpers.cipherCompare(params.password, user.password);
            if (!passwordMatch) { return res.status(400).send({ error: 'Senha incorreta' }); }

            return res.redirect('/user');

        } catch (error) {
            sails.log(error)
            return res.view('500');;
        }
    }
};

