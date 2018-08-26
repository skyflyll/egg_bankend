'use strict';

module.exports = app => {
    /**
     * 表：banner model
     * 字段：id name description
     */
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;
    const Banner = app.model.define('banner', {
        name: STRING(30),
        description: STRING,
    }, {
            tableName: 'banner',
            underscored: true
        });

    Banner.associate = function () {
        // 关联banner_item
        app.model.Banner.hasMany(app.model.BannerItem, {
            as: 'banner_item',
            foreignKey: "banner_id"
        })
        // 关联product
        app.model.Banner.hasOne(app.model.Product, {
            as: 'product',
            foreignKey: 'banner_id'
        })
    }
    return Banner;
}