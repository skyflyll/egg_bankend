'use strict';

const Service = require('egg').Service;

class Banner extends Service {
    async getBanner() {
        return this.ctx.model.Banner.findAll({
            include: {
                model: this.ctx.model.BannerItem,
                as: 'banner_item',
                include:{
                    model:this.ctx.model.Image,
                    as:'image'
                }
            },
        });
    }
}
module.exports = Banner;