'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const filter = require('./filter/index');
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/login', controller.login.index);
  router.post('/api/logout', controller.logout.index);
  router.get('/api/checkUser',filter,controller.checkUser.index);
  router.get('/api/menuList',filter,controller.menuList.index);
};
