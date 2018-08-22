'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534899179821_3004';

  // add your config here
  config.middleware = [];

  exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg_bankend',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456789',
  };

  return config;
  
};
