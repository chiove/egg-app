'use strict';

const Service = require('egg').Service;
class checkUserService extends Service {
  async getUserInfo(params) {
    const userInfo = await this.app.mysql.get('user', { account: params.account });
    return userInfo;
  }
}

module.exports = checkUserService;
