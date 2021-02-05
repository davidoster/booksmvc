/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
// show the form for adding a new product
module.exports = {
  inputs: {},
  exits: {
      success: {
          viewTemplatePath: 'pages/products/new'
      }
  },

  fn: async function(exits) {
      return {}
  }

};

