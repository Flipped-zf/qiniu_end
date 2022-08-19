/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.security = {
    csrf: {
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
    // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'eggtest',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    password: 'root',
    port: 3306,
    database: 'egg-sequelize-doc-default',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656647008134_6522';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 七牛云秘钥
  config.qiniuKey = {
    accessKey: '2VbKkoK7OUFOtAd-FN9CTdnyse0UH357ueB8qGqq',
    secretKey: 'RhG77j6tFzRJ0V5TyqpAQi2EGwpppJ4IYqZVMkTE',
  };


  return {
    ...config,
    ...userConfig,
  };
};
