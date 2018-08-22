'use strict';
module.exports = app =>{
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const Image = app.model.define('image',{
        url:STRING,
    },{
        tableName:'image',
        underscored:true
    })
    Image.associate = function(){
        app.model.Image.hasOne(app.model.BannerItem,{as:'banner_item',foreignKey:'image_id'})
        app.model.Image.hasOne(app.model.ProductImage,{as:'product_image',foreignKey:'image_id'})
    }
    return Image;
}