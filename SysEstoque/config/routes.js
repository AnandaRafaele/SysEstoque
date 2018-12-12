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

  'post /user/delete/:id': {
    controller: 'UserController',
    action: 'delete'
  },

  'put /user/update/:id': {
    controller: 'UserController',
    action: 'update'
  },

  'post /user/signup': {
    controller: 'UserController',
    action: 'signup'
  },

  'put /user/password/:id': {
    controller: 'UserController',
    action: 'password'
  },

  'post /user/login': {
    controller: 'UserController',
    action: 'login'
  },

  'get /user/dashboard': {
    controller: 'UserController',
    action: 'list'
  },

  //SUPPLIER ROUTES

  'post /supplier/create': {
    controller: 'SupplierController',
    action: 'create'
  },

  '/supplier/dashboard': {
    controller: 'SupplierController',
    action: 'list'
  },

  'put /supplier/update/:id': {
    controller: 'SupplierController',
    action: 'update'
  },
  
  'post /supplier/delete/:id': {
    controller: 'SupplierController',
    action: 'delete'
  },

  //STATE ROUTES

  '/state': {
    controller: 'StateController',
    action: 'create'
  },

  //CITY ROUTES

  '/post city': {
    controller: 'CityController',
    action: 'create'
  },

  'get /': {
    view: 'login',
  },

  // PRODUCT ROUTES

  'get /product/dashboard': {
    controller: 'ProductController',
    action: 'list',
  },

  'post /product/delete/:id': {
    controller: 'ProductController',
    action: 'delete',
  },
  
  'post /product/create': {
    controller: 'ProductController',
    action: 'create',
  },

  // CATEGORY ROUTES
  'post /category/create': {
    controller: 'CategoryController',
    action: 'create',
  },

  'get /category/list': {
    controller: 'CategoryController',
    action: 'list',
  },

  //STOCK ROUTES
  '/stock/create': {
    controller: 'StockController',
    action: 'create',
  },
  
  '/stock/delete/:id': {
    controller: 'StockController',
    action: 'delete',
  },

  '/stock/dashboard': {
    controller: 'StockController',
    action: 'list',
  }

};
