'use strict';
module.exports = app =>{
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const Product = app.model.define('product',{
        title:STRING(30), //商品名称
        price:INTEGER, // 商品价格
        old_price:INTEGER, // 原价
        stock:INTEGER, //库存
        product_pro_img:STRING, // 商品预览图
        banner_id:INTEGER, //banner图
        classification_id:INTEGER,
        // category_id:INTEGER, // 商品所属分类
        // comment_id:INTEGER, //评论
    },{
        tableName:'product',
        underscored:true
    })
    Product.associate = function(){
        app.model.Product.belongsTo(app.model.Banner,{as:'banner',foreignKey:'banner_id'})
        app.model.Product.belongsTo(app.model.Classification,{as:'classification',foreignKey:'classification_id'})
        app.model.Product.hasMany(app.model.ProductImage,{as:'product_image',foreignKey:'product_id'});
        // app.model.Product.belongsTo(app.model.Banner,{as:'banner',foreignKey:'banner_id'})
    }
    // Product.sync({force:true});
    return Product;
}