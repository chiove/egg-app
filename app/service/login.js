'use strict';
const Service = require('egg').Service;
const ms = require('ms');
class userService extends Service {
  async signIn(params) {
    const ctx = this.ctx;
    const user = await this.app.mysql.get('user', { account: params.account });
    const result = {};
    if (params.remember) {
      ctx.session.maxAge = ms('30d');
    }
    if (!user) {
      ctx.status = 400;
      result.code = '0001';
      result.key = 'account';
      result.message = 'account not found';
    } else {
      if (user.password === params.password) {
        ctx.status = 200;
        result.code = '0000';
        result.message = 'login sucess';
        ctx.session.account = user.account;
        ctx.session.user_name = user.user_name;
      } else {
        ctx.status = 400;
        result.code = '0002';
        result.key = 'password';
        result.message = 'password error';
      }
    }
    return result;
  }
}
module.exports = userService;
