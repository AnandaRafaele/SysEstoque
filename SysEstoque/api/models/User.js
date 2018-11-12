/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true,
      unique: true
    },

    phoneNumber: {
      type: 'string',
      minLength: 10,
      maxLength: 11,
    },

    password: {
      type: 'string',
      required: true
    },

    status: {
      type: 'string',
      isIn: ['activated', 'disabled', 'blocked'],
      defaultsTo: 'activated'
    },

    accessLevel: {
      type: 'string',
      isIn: ['employee', 'administrator'],
      defaultsTo: 'employee'
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  customToJSON: function () {
    return _.omit(this, ['password'])
  },

  beforeCreate: async function (values, cb) {
    //cipher helper
    if (values.password) {
      try {
        const hash = await sails.helpers.cipherHash(values.password);
        values.password = hash;
        cb();
      } catch (error) {
        return cb(error);
      }
    } else {
      cb();
    }
  },


  beforeUpdate: function (values, cb) {
    //cipher helper

    if (values.password) {

      try {
        const hash = sails.helpers.cipherHash(values.password);
        values.password = hash;
        cb();
      } catch (error) {
        return cb(err);
      }
    } else {
      return cb()
    }
  }
};
