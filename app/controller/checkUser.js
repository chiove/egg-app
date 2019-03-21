"use strict";

const Controller = require('egg').Controller;
class checkUserController extends Controller{
    async index(){
        const ctx = this.ctx;
        const result = await ctx.service.checkUser.getUserInfo(ctx.session);
        ctx.body = {
          message:'login success',
          status:true,
          data:result
        };
    }
}

module.exports =  checkUserController;
