'use strict';

const Service = require('egg').Service;

class Banner extends Service {
    async getBannerBtId(params) {
        return this.ctx.model.Banner.findOne({
            where: {
                id: params.id
            },
            // attributes: { exclude: ['created_at', 'updated_at'] }, // 不要的字段
            attributes: ['id', 'name','description'], // 需要显示的字段
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
        });
    }
}
module.exports = Banner;