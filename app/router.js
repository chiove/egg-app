'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const filter = require('./filter/index');
const getUrl = require('./filter/url');
module.exports = app => {
  const { router } = app;
  router.post('/api/login', 'login.index');
  router.post('/api/logout', 'logout.index');
  router.get('/api/checkUser',filter,'checkUser.index');
  router.resources('/api/apiManagement','apiManagement');
  /*死神的哈士奇url爬取*/
  router.get('/api/getUrl',getUrl);
};
