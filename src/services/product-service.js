const { ProductRepository } = require('../database');
const {
  APIError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
} = require('../../utils/errors/app-errors');

class ProductService {
  constructor() {
    this.repository = new ProductRepository();
  }

  async getProducts() {
    const products = await this.repository.getAllProducts();

    let allProducts = [];
    products.map((product) => {
      let { product_id, category_id, product_name, details, price } = product;

      allProducts.push({
        product_id,
        category_id,
        product_name,
        details,
        price,
      });
    });

    return allProducts;
  }

  async createProduct({ categoryId, productName, details, price }) {
    // TODO: Validate inputs
    const productResult = await this.repository.createProduct({
      categoryId: categoryId,
      productName: productName,
      productDetails: details,
      productPrice: price,
    });

    if (productResult == null) throw new APIError('unable to create product');

    let { product_id, category_id, product_name, details, price } =
      productResult;

    return { product_id, category_id, product_name, details, price };
  }

  async getProduct({ productId }) {
    const product = await this.repository.getProductById({
      productId: productId,
    });

    if (product == null) throw new NotFoundError('product not found');

    const { product_id, category_id, product_name, details, price } = product;

    return { product_id, category_id, product_name, details, price };
  }

  async getProductsByCategory({ categoryId }) {
    const products = await this.repository.getProductsByCategory({
      categoryId: categoryId,
    });

    if (products == null)
      throw new NotFoundError('prducts with this category not found');

    let allProducts = [];
    products.map((product) => {
      let { product_id, category_id, product_name, details, price } = product;

      allProducts.push({
        product_id,
        category_id,
        product_name,
        details,
        price,
      });
    });

    return allProducts;
  }

  async updateProduct({ productId, categoryId, productName, details, price }) {
    const updatedProduct = await this.repository.updateProduct({
      productId: productId,
      categoryId: categoryId,
      productName: productName,
      productDetails: details,
      productPrice: price,
    });

    if (updatedProduct == null)
      throw new APIError('unable to update the product');

    const { product_id, category_id, product_name, details, price } =
      updatedProduct;

    return { product_id, category_id, product_name, details, price };
  }

  async deleteProduct({ productId }) {
    return this.repository.deleteProduct({ productId: productId });
  }
}

module.exports = ProductService;
