const { ProductCategoryModel, ProductModel } = require('../models');
const {
  APIError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
} = require('../../utils/errors/app-errors');

class ProductRepository {
  async createProduct({
    categoryId,
    productName,
    productDetails,
    productPrice,
  }) {
    const product = await ProductModel.create({
      category_id: categoryId,
      product_name: productName,
      details: productDetails,
      price: productPrice,
    });

    return product;
  }

  async getProductById({ productId }) {
    const product = await ProductModel.findOne({
      where: {
        product_id: productId,
      },
    });

    return product;
  }

  async getProductsByCategory({ categoryId }) {
    const products = await ProductModel.findAll({
      where: {
        category_id: categoryId,
      },
    });

    return products;
  }

  async updateProduct({
    productId,
    categoryId,
    productName,
    productDetails,
    productPrice,
  }) {
    const productExist = await ProductModel.findOne({
      where: { product_id: productId },
    });

    productExist.category_id = categoryId;
    productExist.product_name = productName;
    productExist.details = productDetails;
    productExist.price = productPrice;

    const updatedProduct = await productExist.save();

    return updatedProduct;
  }

  async deleteProduct({ productId }) {
    const count = await ProductModel.destroy({
      where: {
        product_id: productId,
      },
    });

    return count > 0;
  }
}

module.exports = ProductRepository;
