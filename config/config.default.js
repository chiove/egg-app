'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536596743345_131';

  // add your config here
  config.middleware = ['errorHandler'];
  config.mysql = {
      // 单数据库信息配置
      client: {
          // host
          host: '118.24.105.199',
          // 端口号
          port: '3306',
          // 用户名
          user: 'root',
          // 密码
          password: 'chiove1992',
          // 数据库名
          database: 'base_db',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: true,
  };

  config.security={
        csrf: {
            enable: false,
        }
    };

    /*统一处理错误*/
    config.errorHandler = {
        match: '/api'
    };
  return config;
};

