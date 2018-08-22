'use strict';
module.exports = app =>{
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const Product = app.model.define('product',{
        titile:STRING(30), //商品名称
        price:INTEGER, // 商品价格
        old_price:INTEGER, // 原价
        stock:INTEGER, //库存
        banner_id:INTEGER, //banner图
        category_id:INTEGER,
        // category_id:INTEGER, // 商品所属分类
        // comment_id:INTEGER, //评论
    },{
        tableName:'product',
        underscored:true
    })
    Product.associate = function(){
        app.model.Product.belongsTo(app.model.Banner,{as:'banner',foreignKey:'banner_id'})
        app.model.Product.hasMany(app.model.ProductImage,{as:'product_image',foreignKey:'product_id'});
        app.model.Product.belongsTo(app.model.Category,{as:'category',foreignKey:'category_id'})
        // app.model.Product.belongsTo(app.model.Banner,{as:'banner',foreignKey:'banner_id'})
    }
    Product.sync({force:true});
    return Product;
}