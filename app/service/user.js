'use strict';
const Service = require('egg').Service;
class userService extends Service {
  async getUser() {
    const result = await this.app.mysql.select('user');
    return { result };
  }
}
module.exports = userService;
