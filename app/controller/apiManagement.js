'use strict';

const Controller = require('egg').Controller;
// 定义创建接口的请求参数规则
const createRule = {
  name: { type: 'string', required: false },
  method: { type: 'string', required: false },
  path: { type: 'string', required: false },
  totalCount: { type: 'number', required: false },
  pageIndex: { type: 'number', required: false },
  pageSize: { type: 'number', required: false },
};

class apiManagementController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.query);
    const result = await ctx.service.apiManagement.index(ctx.query);
    ctx.body = result;
  }
  async create() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const result = await ctx.service.apiManagement.create(ctx.request.body);
    ctx.body = result;
  }

}

module.exports = apiManagementController;
