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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/faq': {action: 'faq'},
  '/xxx': {view: 'pages/homepage'},
  '/error': {view: '404'},
  '/books': {action: 'books'},
  // '/product': {action: 'products/new'},
  '/product/new': {action: 'products/new'},
  '/product/insert': {action: 'products/save'},
  '/products': {action: 'products/list'},
  '/product/edit/:id': {action: 'products/edit'},
  'POST /product/update': {action: 'products/update'},
  '/product/delete/:id': {action: 'products/delete'}

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
