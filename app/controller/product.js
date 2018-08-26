'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller{
    async index(){
        const ctx = this.ctx;
        const productParams = ctx.params;
        try{
            ctx.validate({
                offset: { type: 'id' }, // id规则 /^\d+$/
                limit: { type: 'id' },
              },productParams);  // 验证参数
        }catch(err){
            ctx.logger.warn(err.errors);
            ctx.body = { faid: "参数错误" };
            return;
        }
        let products = await ctx.service.product.getAllProducts(productParams);
        ctx.body = products;
    }
    async byId(){
        const ctx = this.ctx;
        const params = ctx.params;
        try{
            ctx.validate({
                id:{type:'id'}
            },params);
        }catch(err){
            ctx.logger.warn(err.errors);
            ctx.body = { faid: "product-参数错误" };
            return;
        }
        let productDeatils = await ctx.service.product.getProductById(params.id);
        ctx.body = productDeatils;
    }
}
module.exports = ProductController;