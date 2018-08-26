'use strict';

const Service = require('egg').Service;

class Product extends Service {
    async getAllProducts(productParams) {
        return this.ctx.model.Product.findAll({
            offset: Number(productParams.offset),
            limit: Number(productParams.limit),
        });
    }
    async getProductById(id) {
        return this.ctx.model.Product.findOne({
            // 根据id获取商品
            where:{
                id:id
            },
            attributes: ['id', 'title', 'price', 'old_price','discount','product_pro_img'],
            include: {
                // 子查询 获取banner信息
                model: this.ctx.model.Banner,
                as: 'banner',
                attributes:['id','name','description'],
                // 获取banner图片
                include: {
                    model: this.ctx.model.BannerItem,
                    as: 'banner_item',
                    attributes: ['id', 'key_word'],                
                    include: {
                        model: this.ctx.model.Image,
                        as: 'image',
                        attributes: ['id', 'url'],
                    }
                },
            },
        })
    }
}
module.exports = Product;