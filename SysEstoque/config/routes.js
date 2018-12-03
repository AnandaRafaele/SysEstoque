/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //USER ROUTES

  '/user/delete/:id': {
    controller: 'UserController',
    action: 'delete'
  },

  '/user/update/:id': {
    controller: 'UserController',
    action: 'update'
  },
  '/user/update/:id': {
    controller: 'UserController',
    action: 'update'
  },

  '/user/signup': {
    controller: 'UserController',
    action: 'signup'
  },
  '/user/password/:id': {
    controller: 'UserController',
    action: 'password'
  },
  '/user/login': {
    controller: 'UserController',
    action: 'login'
  },

  //SUPPLIER ROUTES

  '/supplier/add': {
    controller: 'SupplierController',
    action: 'create'
  },

  '/supplier/list': {
    controller: 'SupplierController',
    action: 'list'
  },
  
  '/supplier/update': {
    controller: 'SupplierController',
    action: 'update'
  },

  //STATE ROUTES

  '/state': {
    controller: 'StateController',
    action: 'create'
  },

  //CITY ROUTES

  '/city': {
    controller: 'CityController',
    action: 'create'
  }

};
