'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
   /**
    * Retrieve records.
    *
    * @return {Array}
    */
 
   async find(ctx) {
     let entities;
     if (ctx.query._q) {
       entities = await strapi.services.product.search(ctx.query);
     } else {
       entities = await strapi.services.product.find(ctx.query);
     }
 
     return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.product }));
   },
};
 