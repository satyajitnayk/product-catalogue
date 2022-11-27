const ProductService = require('../services/product-service');
const {
  createProductValidator,
  updateProductValidator,
} = require('./validations');

module.exports = (app) => {
  const service = new ProductService();

  app.get('/products', async (req, res, next) => {
    const data = await service.getProducts();

    return res.status(200).json(data);
  });

  app.get('/products/:id', async (req, res, next) => {
    const productId = req.params.id;

    const data = await service.getProduct({ productId: productId });

    return res.status(200).json(data);
  });

  app.post('/products', createProductValidator, async (req, res, next) => {
    const { categoryId, productName, productDetails, productPrice } = req.body;

    const data = await service.createProduct({
      categoryId: categoryId,
      ProductDetails: productDetails,
      ProductPrice: productPrice,
      productName: productName,
    });

    return res.status(200).json(data);
  });

  app.get('/products/category/:id', async (req, res, next) => {
    const categoryId = req.params.id;

    const data = await service.getProductsByCategory({
      categoryId: categoryId,
    });

    return res.status(200).json(data);
  });

  app.put('/products', updateProductValidator, async (req, res, next) => {
    const { productId, categoryId, productName, productDetails, productPrice } =
      req.body;

    const data = await service.updateProduct({
      categoryId: categoryId,
      productDetails: productDetails,
      productPrice: productPrice,
      productId: productId,
      productName: productName,
    });

    return res.status(200).json(data);
  });

  app.delete('/products/:id', async (req, res, next) => {
    const productId = req.params.id;

    const data = await service.deleteProduct({ productId: productId });

    return res.status(200).json(data);
  });
};
