'use strict';

// had enabled by egg
// exports.static = true;

// orm操作数据库
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}

// 参数校验层
exports.validate = {
    enable: true,
    package: 'egg-validate',
};