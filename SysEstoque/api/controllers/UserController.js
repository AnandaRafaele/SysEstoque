const localStorage = require('localStorage')

module.exports = {
    list: async function (req, res) {
        try {
            const users = await User.find();
            return res.status(201).json(users);
        } catch (error) {
            return res.status(500).send({ error: 'Database error' });
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
            }

            const user = await User.create(userToCreate).fetch();
            return res.status(201).json(user)
        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }
    },

    delete: async function (req, res) {

        try {
            await User.destroy({ id: req.params.id })
            return res.status(500).send({ message: 'Usuário excluído com sucesso' })
        } catch (error) {
            return res.status(500).send({ error: 'Database error' });
        }
    },

    update: async function (req, res) {

        const params = req.body;
        let userId = req.params.id;

        if (!userId) {
            return res.status(400).send({ error: 'Faltando parâmetros' })
        }

        try {
            const user = await User.update({id: userId}, params).fetch()
            return res.status(201).json(user)
        } catch (error) {
            return res.status(500).send({ error: 'Database error' });
        }

    },

    login: async function (req, res) {
        const params = req.body;

        try {
            const user = await User.findOne({ email: params.email });

            if (!user) { return res.status(400).send({ error: 'Usuário não existe' }); }

            const passwordMatch = await sails.helpers.cipherCompare(params.password, user.password);
            if (!passwordMatch) { return res.status(400).send({ error: 'Senha incorreta' }); }

            const token = await sails.helpers.authToken(user);
            if (token) {
                return res.status(201).send({user, token})
            } else {
                return res.status(400).send({ error: 'Usuário não existe' });
            }

        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }
    }
};

