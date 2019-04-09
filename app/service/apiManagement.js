'use strict';

const Service = require('egg').Service;
class apiManagementService extends Service {
  async index(params) {
    const res = {
      code: 0,
      message: 'success',
    };
    if (Object.keys(params).length === 0) {
      res.data = await this.app.mysql.select('api_management', { limit: 10, offset: 0 });
    } else {
      res.data = await this.app.mysql.select('api_management', {
        where: {
          ...params,
        },
        limit: 10,
        offset: 0,
      });
    }
    return res;
  }
  async create(params) {
    const res = {
      code: 0,
      message: 'success',
    };
    await this.app.mysql.insert('api_management', params);
    return res;
  }
}

module.exports = apiManagementService;
