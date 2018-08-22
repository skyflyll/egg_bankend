'use strict';
module.exports = app =>{
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const ProductImage = app.model.define('product_image',{
        order:INTEGER,
        image_id:INTEGER,
        product_id:INTEGER,
    },{
        tableName:'product_image',
        underscored:true
    })
    ProductImage.associate = function(){
        app.model.ProductImage.belongsTo(app.model.Image,{as:'image',foreignKey:'image_id'})
        app.model.ProductImage.belongsTo(app.model.Product,{as:'product',foreignKey:'product_id'})
    }
    ProductImage.sync({force:true});
    return ProductImage;
}