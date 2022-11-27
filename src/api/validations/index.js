const Joi = require('joi');
const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

const fs = require('fs');
const path = require('path');
const { ValidationError, APIError } = require('../../utils/errors/app-errors');
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    file = path.basename(file, '.js');
    module.exports[`${file}Validator`] = async (req, res, next) => {
      try {
        req.body = await require(path.join(__dirname, file))(Joi).validateAsync(
          req.body,
          options
        );
        return next();
      } catch (error) {
        if (error.isJoi) {
          error.statusCode = 422;
          return next(error);
        } else next(error);
      }
    };
  });
