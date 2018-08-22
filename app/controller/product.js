'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller{
    async index(){
        const ctx = this.ctx;
        let products = await ctx.service.product.getProduct();
        ctx.body = products;
        console.log(products);
    }
}
module.exports = ProductController;