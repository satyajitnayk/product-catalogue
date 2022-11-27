module.exports = (Joi) => {
  return Joi.object({
    categoryName: Joi.string().required(),
    categoryDetails: Joi.string().required(),
  });
};
