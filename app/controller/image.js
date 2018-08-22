'use strict';

const Controller = require('egg').Controller;

class Image extends Controller{
    async index(){
        const ctx = this.ctx;
        // let banners = await ctx.service.banner.getBanner();
        let image = await ctx.service.image.getImage();;
        // console.log(image);
        ctx.body = image;
    }
}
module.exports = Image;