/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async function (req, res) {
        try {
            const users = await User.find();

            return res.view('pages/list', { users: users });
        } catch (error) {
            return res.status(500).send({ error: 'Database error' });
        }
    },

    create: async function (req, res) {

        if (!req.body.password) { return res.status(400).send({ error: 'Alguns parâmetros estão faltando ser preenchidos' }) }

        const name = req.body.name;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        const password = req.body.password;
        const status = req.body.status;

        try {
            await User.create({ name, email, phoneNumber, password, status }).fetch();

            return res.redirect('/user/list')
        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }
    },

    deconste: async function (req, res) {

        try {
            await User.destroy({ id: req.params.id })
            return res.redirect('/user/list')
        } catch (error) {
            return res.status(500).send({ error: 'Database error' });
        }
    },

    edit: async function (req, res) {

        try {
            const user = await User.findOne({ id: req.params.id })
            return res.view('pages/edit', { user: user })
        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }

    },

    update: async function (req, res) {
        console.log(req.body)
        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        const status = req.body.status;

        try {
            await User.update({ id }, { name, email, phoneNumber, status }).fetch()
            return res.redirect('/user/list')
        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }

    },

    formPassword: async function (req, res) {
        try {
            const user = await User.findOne({ id: req.params.id })
            return res.view('pages/formPassword', { user: user })
        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }
    },

    password: async function (req, res) {
        const id = req.param.id

        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;

        try {
            if (sails.helpers.cipherCompare(oldPassword, user.password)) {
                await User.update({ id }, { password: newPassword });

                return res.view('pages/list', { user: user });
            } else {
                return res.status(400).send({ error: 'Bad Resquest' });
            }
        } catch (error) {
            return res.status(500).send({ error: 'Database error' });
        }
    },

    login: async function (req, res) {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await User.find({email});
            console.log(user)
            if (!user) { return res.status(400).send({ error: 'Usuário não existe' }); }

            const passwordMatch = await sails.helpers.cipherCompare(password, user.password);
            if (!passwordMatch) { return res.status(400).send({ error: 'Senha incorreta' }); }

            const token = await sails.helpers.authToken(user);
            if (token) {
                return res.redirect('/user/list', token)
            } else {
                return res.status(400).send({ error: 'Usuário não existe' });
            }

        } catch (error) {
            sails.log(error)
            return res.status(500).send({ error: 'Database error' });
        }
    }
};

