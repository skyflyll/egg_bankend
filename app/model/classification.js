'use strict';

module.exports = app => {
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const Classification = app.model.define('classification', {
        name: STRING(30),// 分类名
        description: STRING, // 分类描述
        img_url:STRING // 分类图 
    }, {
        tableName: 'classification',
        underscored: true
    })

    Classification.associate = function () {
        app.model.Classification.hasMany(app.model.Product, {
            as: 'product',
            foreignKey: "classification_id"
        })
    }
    return Classification;
}