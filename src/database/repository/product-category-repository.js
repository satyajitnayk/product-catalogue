const { ProductCategoryModel } = require('../models');
const {
  APIError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
} = require('../../utils/errors/app-errors');

class ProductCategoryRepository {
  async createProductCategory({ category_name, details }) {
    try {
      const productCategory = await ProductCategoryModel.create({
        category_name,
        details,
      });
      const { category_id, category_name, details } = productCategory;
      return { category_id, category_name, details };
    } catch (error) {
      throw APIError('unable to create product category');
    }
  }
}

module.exports = ProductCategoryRepository;
