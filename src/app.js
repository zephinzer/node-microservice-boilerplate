module.exports = microserviceBoilerplate;

/**
 * Returns an Express.js server provisioned with some
 * basic stuff
 */
function microserviceBoilerplate({
  configuration
}) {
  const express = require('express');
  const cookieParser = require('cookie-parser');

  const server = express();
  server.use(cookieParser());

  return server;
}
