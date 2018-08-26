'use strict';

const Controller = require('egg').Controller;

class ClassificationController extends Controller{
    //获取所有的分类
    async index(){
        const ctx = this.ctx;
        ctx.body = await ctx.service.classification.getAll();
    }
    // 根据id获取获取分类商品
    async byid(){
        const ctx = this.ctx;
        const parmas = ctx.params;
        const rule = { id: /\d+/ }; // id验证规则
        try{
            ctx.validate(rule,parmas);
        }catch(err){
            ctx.logger.warn(err.errors);
            ctx.body = { faid: "分类-参数错误" };
            return;
        }
        ctx.body = await ctx.service.classification.getClassificationById(parmas.id);
    }

}
module.exports = ClassificationController;