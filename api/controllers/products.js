/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  inputs: {},
  exits: {
      success: {
          viewTemplatePath: 'products'
      }
  },

  fn: async function(exits) {
      return {}
  }

};

