'use strict';

module.exports = app => {
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
    })

    Banner.associate = function () {
        app.model.Banner.hasMany(app.model.BannerItem, {
            as: 'banner_item',
            foreignKey: "banner_id"
        })
        app.model.Banner.hasOne(app.model.Product,{
            as:'product',
            foreignKey:'banner_id'
        })
    }
    return Banner;
}