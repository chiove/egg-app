'use strict';
const Service = require('egg').Service;
const ms = require('ms');
class logoutService extends Service {
    constructor(ctx){
        super(ctx)
    }
    async signOut(params) {
        const ctx = this.ctx;
        const user = await this.app.mysql.get('user',{account:params.account});
        console.log(params)
        let result = {};
        const { account, user_name} = ctx.session;
        if(user.account === account && user.user_name === user_name) {
            ctx.session = null;
            result.message = '退出成功';
            result.code = 200;
        }else{
            ctx.status = 401;
            result.code = 401;
            result.message = 'user error'
        }
        return result;
    }
}
module.exports = logoutService;
