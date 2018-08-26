'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
    async index() {
        const ctx = this.ctx;
        const bannerParams = ctx.params;
        const rule = { id: /\d+/ }; // id验证规则
        try{
            ctx.validate(rule, bannerParams);  // 验证id
        }catch(err){
            ctx.logger.warn(err.errors);
            ctx.body = { faid: "参数错误" };
            return;
        }
        let banners = await ctx.service.banner.getBannerBtId(bannerParams);
        ctx.body = banners;
    }
}
module.exports = BannerController;