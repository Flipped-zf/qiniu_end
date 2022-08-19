'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api', controller.home.getTokens);
  router.get('/api/qiniu/qiniutoken', controller.qiniu.getToken); // 获取七牛云证书秘钥
  router.post('/api/qiniu/delfile', controller.qiniu.delFile);
  router.post('/api/qiniu/getcdn', controller.qiniu.delFile);
  router.resources('users', '/users', controller.users);
};
