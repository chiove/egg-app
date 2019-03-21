"use strict";

const Service = require('egg').Service;
class menuListService extends Service{
    constructor(ctx) {
        super(ctx);
    }
    async searchMenu(params){
        const ctx = this.ctx;
        let menuList = [];
        if(!params.id){
            menuList = await this.app.mysql.select('menu_list');
        }else{
            menuList = await this.app.mysql.select('menu_list',{id:params.id});
        }
        return menuList;
    }
}

module.exports = menuListService;
