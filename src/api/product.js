const ProductService = require('../services/product-service');

module.exports = (app) => {
  const service = new ProductService();

  app.get('/', async (req, res, next) => {
    const data = await service.getProducts();

    return res.status(200).json(data);
  });

  app.get('/:id', async (req, res, next) => {
    const productId = req.params.id;

    const data = await service.getProduct({ productId: productId });

    return res.status(200).json(data);
  });

  app.post('/', async (req, res, next) => {
    const { categoryId, productName, details, price } = req.body;

    const data = await service.createProduct({
      category_id: categoryId,
      details: details,
      price: price,
      product_name: productName,
    });

    return res.status(200).json(data);
  });

  app.get('/category/:id', async (req, res, next) => {
    const categoryId = req.params.id;

    const data = await service.getProductsByCategory({
      categoryId: categoryId,
    });

    return res.status(200).json(data);
  });

  app.put('/', async (req, res, next) => {
    const { productId, categoryId, productName, details, price } = req.body;

    const data = await service.updateProduct({
      categoryId: categoryId,
      details: details,
      price: price,
      productId: productId,
      productName: productName,
    });

    return res.status(200).json(data);
  });

  app.delete('/:id', async (req, res, next) => {
    const productId = req.params.id;

    const data = await service.deleteProduct({ productId: productId });

    return res.status(200).json(data);
  });
};
