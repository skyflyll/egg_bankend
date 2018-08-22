'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller{
    async index(){
        const ctx = this.ctx;
        let banners = await ctx.service.banner.getBanner();
        ctx.body = banners;
        console.log(banners);
    }
}
module.exports = BannerController;