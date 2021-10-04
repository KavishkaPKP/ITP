const routes = require('express').Router();

const StudentRoute = require('./Student')



routes.use('/StudentRoute', StudentRoute);






module.exports = routes;
      