'use strict';
const Controller = require('egg').Controller;

class Qiniu extends Controller {
  async getToken() {
    const { ctx } = this;
    try {
      const uploadToken = await ctx.service.qiniu.getToken('hellozf'); // 存储空间名bucket
      ctx.status = 200;
      ctx.body = {
        data: uploadToken,
      };
    } catch (err) {
      ctx.status = 500;
      console.log(err);
    }
  }
  async delFile() {

    const { key } = this.ctx.request.body;
    console.log('key1:' + key);

    let mykey = key;
    if (mykey === undefined) {
      mykey = '';
    }
    console.log('key2:' + mykey);

    try {
      await this.ctx.service.qiniu.deleteFile('hellozf', mykey);
      this.ctx.status = 200;
      this.ctx.body = {
        success: 1,
      };
    } catch (error) {
      this.ctx.status = 200;
      this.ctx.body = {
        success: 0,
      };
    }

  }

}
module.exports = Qiniu;
