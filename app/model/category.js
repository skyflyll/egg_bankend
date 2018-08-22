
// 'use strict';

module.exports = app => {
    const { STRING,INTEGER,DATE } = app.Sequelize;
    const Categoty = app.model.define('category', {
        name: STRING(30),
        description: STRING,
    }, {
        tableName: 'category',
        underscored: true
    })

    Categoty.associate = function () {
        app.model.Categoty.hasMany(app.model.Product, {
            as: 'product',
            foreignKey: "category_id"
        })
    }
    // Categoty.sync({force:true});
    return Categoty;
}