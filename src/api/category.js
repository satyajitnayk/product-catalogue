const ProductCategoryservice = require('../services/product-category-service');
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require('./validations');

module.exports = (app) => {
  const service = new ProductCategoryservice();

  app.get('/categories', async (req, res, next) => {
    const data = await service.getCategories();

    return res.status(200).json(data);
  });

  app.get('/categories/:id', async (req, res, next) => {
    const categoryId = req.params.id;

    const data = await service.getCategory({ categoryId: categoryId });

    return res.status(200).json(data);
  });

  app.post('/categories', createCategoryValidator, async (req, res, next) => {
    const { categoryName, categoryDetails } = req.body;

    const data = await service.createCategory({
      categoryDetails: categoryDetails,
      categoryName: categoryName,
    });

    return res.status(200).json(data);
  });

  app.put('/categories', updateCategoryValidator, async (req, res, next) => {
    const { categoryId, categoryName, categoryDetails } = req.body;

    const data = await service.updateCategory({
      categoryDetails: categoryDetails,
      categoryId: categoryId,
      categoryName: categoryName,
    });

    return res.status(200).json(data);
  });

  app.delete('/categories/:id', async (req, res, next) => {
    const categoryId = req.params.id;

    const data = await service.deleteCategory({ categoryId: categoryId });

    return res.status(200).json(data);
  });
};
