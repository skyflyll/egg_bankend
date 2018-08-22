'use strict';
module.exports = app =>{
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const BannerItem = app.model.define('banner_item',{
        key_word:STRING,
        type:INTEGER,
        banner_id:INTEGER,
        image_id:INTEGER
    },{
        tableName:'banner_item',
        underscored:true
    })
    BannerItem.associate = function(){
        app.model.BannerItem.belongsTo(app.model.Banner,{as:'banner',foreignKey:'banner_id'})
        app.model.BannerItem.belongsTo(app.model.Image,{as:'image',foreignKey:'image_id'})
    }    
    return BannerItem;
}