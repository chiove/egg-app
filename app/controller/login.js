"use strict";

const Controller = require('egg').Controller;
class LoginController extends Controller {
  async index() {
    const ctx = this.ctx;
    const result = await ctx.service.login.signIn(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = LoginController;
