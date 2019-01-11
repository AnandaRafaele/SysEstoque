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

  '/user': {
    controller: 'UserController',
    action: 'list'
  },

  //SUPPLIER ROUTES

  '/supplier/create': {
    controller: 'SupplierController',
    action: 'create'
  },

  '/supplier': {
    controller: 'SupplierController',
    action: 'list'
  },

  '/supplier/update/:id': {
    controller: 'SupplierController',
    action: 'update'
  },

  '/supplier/delete/:id': {
    controller: 'SupplierController',
    action: 'delete'
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
  },

  '/': {
    view: 'login',
  },

  // PRODUCT ROUTES

  '/product': {
    controller: 'ProductController',
    action: 'list',
  },

  '/product/delete/:id': {
    controller: 'ProductController',
    action: 'delete',
  },

  '/product/create': {
    controller: 'ProductController',
    action: 'create',
  },

  // CATEGORY ROUTES
  '/category/create': {
    controller: 'CategoryController',
    action: 'create',
  },

  '/category/delete/:id': {
    controller: 'CategoryController',
    action: 'delete',
  },

  //CUSTOMER ROUTES
  '/stock/create': {
    controller: 'StockController',
    action: 'create',
  },

  '/stock/delete/:id': {
    controller: 'StockController',
    action: 'delete',
  },

  '/stock': {
    controller: 'StockController',
    action: 'list',
  },

  //SELL ROUTES
  '/sell/create': {
    controller: 'SellController',
    action: 'create',
  },

  '/sell/delete/:id': {
    controller: 'SellController',
    action: 'delete',
  },

  '/sell': {
    controller: 'SellController',
    action: 'list',
  },

  //CUSTOMER ROUTES
  '/customer/create': {
    controller: 'CustomerController',
    action: 'create',
  },

  '/customer/delete/:id': {
    controller: 'CustomerController',
    action: 'delete',
  },

  '/customer': {
    controller: 'CustomerController',
    action: 'list',
  },

  //CONTROL ROUTES
  '/brand/create': {
    controller: 'BrandController',
    action: 'create',
  },

  //CONTROL ROUTES

  '/controle': {
    controller: 'CategoryController',
    action: 'list',
  }

};
