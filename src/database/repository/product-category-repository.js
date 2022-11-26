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

    if (productCategory == null)
      throw new NotFoundError('unable to create new category');

    const { category_id, category_name, details } = productCategory;
    return { category_id, category_name, details };
  }

  async getProductCategoryById({ categoryId }) {
    const productCategory = await ProductCategoryModel.findOne({
      where: {
        category_id: categoryId,
      },
    });

    if (productCategory == null)
      throw new NotFoundError('unable to find the category with the given id');

    const { category_id, category_name, details } = productCategory;
    return { category_id, category_name, details };
  }

  async updateProductCategory({ categoryId, categoryName, categoryDetails }) {
    const productCategoryExist = await ProductCategoryModel.findOne({
      where: { category_id: categoryId },
    });

    if (productCategoryExist == null)
      throw new NotFoundError('category not found');

    productCategoryExist.category_name = categoryName;
    productCategoryExist.details = categoryDetails;

    const updatedCategory = await productCategoryExist.save();

    if (updatedCategory == null)
      throw new APIError('unable to update product category');

    const { category_id, category_name, details } = updatedCategory;
    return { category_id, category_name, details };
  }

  async deleteCategory({ categoryId }) {
    // check if products with same category already exists then do not delete
    const product = await ProductModel.findOne({
      where: {
        category_id: categoryId,
      },
    });

    // since product with the given category alreday exist we can not delete it
    if (product) throw new APIError('unable to delete product category');

    const count = await ProductCategoryModel.destroy({
      where: {
        category_id: categoryId,
      },
    });

    if (count == null || count == 0) {
      throw new NotFoundError('unable to delete the category');
    }

    return true;
  }
}

module.exports = ProductCategoryRepository;
