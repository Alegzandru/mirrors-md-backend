const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    const { paynetid } = ctx.params;

    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.client.update({ paynetid }, data, {
        files,
      });
    } else {
      entity = await strapi.services.client.update({ paynetid }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.client });
  },
};
