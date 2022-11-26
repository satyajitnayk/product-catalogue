const { ProductCategoryModel, ProductModel } = require('../models');
const {
  APIError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
} = require('../../utils/errors/app-errors');

class ProductCategoryRepository {
  async createProductCategory({ categoryName, categoryDetails }) {
    try {
      const productCategory = await ProductCategoryModel.create({
        category_name: categoryName,
        details: categoryDetails,
      });
      const { category_id, category_name, details } = productCategory;
      return { category_id, category_name, details };
    } catch (error) {
      throw APIError('unable to create product category');
    }
  }

  async getProductCategoryById({ categoryId }) {
    try {
      const productCategory = await ProductCategoryModel.findOne({
        where: {
          category_id: categoryId,
        },
      });

      if (productCategory == null)
        throw NotFoundError('unable to find the category with the given id');

      const { category_id, category_name, details } = productCategory;
      return { category_id, category_name, details };
    } catch (error) {
      throw APIError('unable to create product category');
    }
  }

  async updateProductCategory({ categoryId, categoryName, categoryDetails }) {
    try {
      const updatedCategory = await ProductCategoryModel.update(
        {
          category_name: categoryName,
          details: categoryDetails,
        },
        {
          where: { category_id: categoryId },
        }
      );

      if (updatedCategory == null)
        throw APIError('unable to update product category');

      const { category_id, category_name, details } = updatedCategory;
      return { category_id, category_name, details };
    } catch (error) {
      throw APIError('unable to update product category');
    }
  }

  async deleteCategory({ categoryId }) {
    try {
      // check if products with same category already exists then do not delete
      const product = await ProductCategoryModel.findOne({
        where: {
          category_id: categoryId,
        },
      });

      // since product with the given category alreday exist we can not delete it
      if (product) throw APIError('unable to delete product category');

      const count = await ProductCategoryModel.destroy({
        where: {
          category_id: categoryId,
        },
      });

      if (count == null || count == 0) {
        throw NotFoundError('unable to delete the category');
      }

      return true;
    } catch (error) {
      throw APIError('unable to delete product category');
    }
  }
}

module.exports = ProductCategoryRepository;
