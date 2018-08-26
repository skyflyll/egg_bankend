'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/cms')(app);
  require('./router/api')(app);
};

