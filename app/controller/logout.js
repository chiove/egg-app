'use strict';

const Controller = require('egg').Controller;
class LogoutController extends Controller {
  async index() {
    const ctx = this.ctx;
    const result = await ctx.service.logout.signOut(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = LogoutController;
