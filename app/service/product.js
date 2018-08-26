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
            where:{
                id:id
            },
            attributes: ['id', 'title', 'price', 'old_price','discount','product_pro_img'],
            include: {
                model: this.ctx.model.Banner,
                as: 'banner',
                attributes:['id','name','description'],
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