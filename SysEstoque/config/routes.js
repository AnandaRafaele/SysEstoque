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
  '/product/add':{
    view: 'pages/Product/add',
  },
  '/product/create':{
    controller: 'ProductController',
    action: 'create'
  },

  '/product/list':{
    controller: 'ProductController',
    action: 'list',

  },

  '/': {
    view: 'pages/login'
  },

  '/user/list': {
    controller: 'UserController',
    action: 'list'
  },

  '/user/add': {
    // controller: 'UserController',
    // action: 'add'
    view: 'pages/User/add'
  },

  '/user/delete/:id': {
    controller: 'UserController',
    action: 'delete'
  },

  '/user/edit/:id': {
    controller: 'UserController',
    action: 'edit'
  },

  '/user/update/:id': {
    controller: 'UserController',
    action: 'update'
  },

  '/user/create': {
    controller: 'UserController',
    action: 'create'
  },

  '/user/formPassword/:id': {
    // controller: 'UserController',
    // action: 'formPassword'
    view: 'pages/User/formPassword'
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
    view: 'pages/login'
  },
  
 

};
