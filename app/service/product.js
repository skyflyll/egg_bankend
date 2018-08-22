'use strict';

const Service = require('egg').Service;

class Product extends Service {
    async getProduct() {
        return this.ctx.model.Product.findAll({
            // include:{
            //     model:this.ctx.model.Classification,
            //     as:'classification',
            //     // include:{
            //     //     model:this.ctx.model.ProductImage,
            //     //     as:'product_image'
            //     // }
            // },
            include:{
                model:this.ctx.model.ProductImage,
                as:'product_image',
                include:{
                    model:this.ctx.model.Image,
                    as:'image',
                }
            }
        });
    }
}
module.exports = Product;