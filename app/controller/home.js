'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      namw: 'zfHello',
    };
  }
  async getTokens() {
    const { ctx } = this;
    ctx.body = {
      nam: 'token',
    };
  }
}

module.exports = HomeController;
