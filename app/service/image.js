'use strict';

const Service = require('egg').Service;

class Image extends Service {
    async getImage() {
        return this.ctx.model.Image.findAll({
            include: {
                model: this.ctx.model.BannerItem,
                as: 'banner_item',
                include:{
                    model:this.ctx.model.Banner,
                    as:'banner'
                }
            },
        });
    }
}
module.exports = Image;