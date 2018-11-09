"use strict";

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const result = await ctx.service.user.getUser();
    ctx.body = result;
  }
}

module.exports = HomeController;
