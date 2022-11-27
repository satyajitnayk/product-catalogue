const express = require('express');

const { category, product } = require('./api');

module.exports = async (app) => {
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  product(app);

  category(app);
};
