'use strict';

/**
 * Bike.js controller
 *
 * @description: A set of functions called "actions" for managing `Bike`.
 */

module.exports = {

  /**
   * Retrieve bike records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.bike.search(ctx.query);
    } else {
      return strapi.services.bike.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a bike record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.bike.fetch(ctx.params);
  },

  /**
   * Count bike records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bike.count(ctx.query);
  },

  /**
   * Create a/an bike record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bike.add(ctx.request.body);
  },

  /**
   * Update a/an bike record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bike.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bike record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bike.remove(ctx.params);
  }
};
