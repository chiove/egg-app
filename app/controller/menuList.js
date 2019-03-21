"use strict";

const Controller = require('egg').Controller;
class menuListController extends Controller{
    async index(){
        const ctx = this.ctx;
        const result = await ctx.service.menuList.searchMenu(ctx.request.body);
        ctx.body = result;
    }
}

module.exports =  menuListController;
