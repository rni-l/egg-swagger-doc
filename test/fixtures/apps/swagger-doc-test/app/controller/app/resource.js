'use strict';

const Controller = require('egg').Controller;
/**
 * @Controller app
 */
class ResourceController extends Controller {
  /**
   * @Summary 创建资源
   * @Router POST /resource2
   * @Request query parameters test
   * @Request header string access_token
   * @Response 200 baseResponse
   */
  async index() {
    this.ctx.body = {
      result: true
    };
  }
}

module.exports = ResourceController;
