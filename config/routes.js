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

  '/': {
    view: 'pages/homepage'
  },

  /** USER ROUTES */
  'post /user/signup': 'user/signup',
  'get /user/list': 'user/list',
  'patch /user/:id/status': 'user/status',
  'put /user/:id': 'user/update',


};
