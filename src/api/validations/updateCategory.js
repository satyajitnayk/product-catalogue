module.exports = (Joi) => {
  return Joi.object({
    categoryId: Joi.number().required(),
    categoryName: Joi.string().required(),
    categoryDetails: Joi.string().required(),
  });
};
