const Service = require('egg').Service;

class Classification extends Service {
    async getAll() {
        return this.app.model.Classification.findAll({
            attributes: ['id', 'name', 'description', 'img_url'], // 需要显示的字段
        });
    }
    async getClassificationById(id = 1) {
        return this.app.model.Classification.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'name', 'description', 'img_url'], // 需要显示的字段
            include: {
                model: this.ctx.model.Product,
                as: 'product',
                attributes: ['id', 'title', 'price', 'old_price','discount','product_pro_img']
            },
        })
    }
}
module.exports = Classification;