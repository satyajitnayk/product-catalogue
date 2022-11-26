const { ProductCategoryModel, ProductModel } = require('../models');
const {
  APIError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
} = require('../../utils/errors/app-errors');

class ProductCategoryRepository {
  async createProductCategory({ categoryName, categoryDetails }) {
    const productCategory = await ProductCategoryModel.create({
      category_name: categoryName,
      details: categoryDetails,
    });

    return productCategory;
  }

  async getProductCategoryById({ categoryId }) {
    const productCategory = await ProductCategoryModel.findOne({
      where: {
        category_id: categoryId,
      },
    });

    return productCategory;
  }

  async updateProductCategory({ categoryId, categoryName, categoryDetails }) {
    const productCategoryExist = await ProductCategoryModel.findOne({
      where: { category_id: categoryId },
    });

    productCategoryExist.category_name = categoryName;
    productCategoryExist.details = categoryDetails;

    const updatedCategory = await productCategoryExist.save();

    return updatedCategory;
  }

  async deleteCategory({ categoryId }) {
    const count = await ProductCategoryModel.destroy({
      where: {
        category_id: categoryId,
      },
    });

    return count > 0;
  }
}

module.exports = ProductCategoryRepository;
