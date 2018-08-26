'use strict';

module.exports = app => {
    // const apiV1Router = app.router.namespace('/api/v1');
    const { controller, router } = app;

    router.get('/api/v1/', controller.home.index); //首页测试

    router.get('/api/v1/banner/:id', controller.banner.index); //根据id获取banner图

    router.get('/api/v1/product/:offset/:limit', controller.product.index); //获取所有商品 分页 限制、跳过
    router.get('/api/v1/classification',controller.classification.index) // 获取分类
    router.get('/api/v1/classification/:id',controller.classification.byid) // 获取分类
    router.get('/api/v1/product/:id', controller.product.byId); //获取商品详情


    router.get('/api/v1/image', controller.image.index);
}