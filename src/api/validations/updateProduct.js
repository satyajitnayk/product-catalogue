module.exports = (Joi) => {
  return Joi.object({
    productId: Joi.number().required(),
    categoryId: Joi.number().required(),
    productName: Joi.string().required(),
    productDetails: Joi.string().required(),
    productPrice: Joi.number().required(),
  });
};
