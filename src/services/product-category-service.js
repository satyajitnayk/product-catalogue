const { ProductCategoryRepository } = require('../database');
const {
  APIError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
} = require('../utils/errors/app-errors');

class ProductCategoryService {
  constructor() {
    this.repository = new ProductCategoryRepository();
  }

  async getCategories() {
    const categories = await this.repository.getAllCategories();

    if (categories == null) throw new NotFoundError('no categories found');

    let allCategories = [];
    categories.map((category) => {
      const { category_id, category_name, details } = category;
      allCategories.push({ category_id, category_name, details });
    });

    return allCategories;
  }

  async createCategory({ categoryName, categoryDetails }) {
    const createdCategory = await this.repository.createProductCategory({
      categoryDetails: categoryDetails,
      categoryName: categoryName,
    });

    if (createdCategory == null)
      throw new APIError('unable to create category');

    const { category_id, category_name, details } = createdCategory;

    return { category_id, category_name, details };
  }

  async getCategory({ categoryId }) {
    const category = await this.repository.getProductCategoryById({
      categoryId: categoryId,
    });

    if (category == null) throw new NotFoundError('category not found');

    const { category_id, category_name, details } = category;

    return { category_id, category_name, details };
  }

  async updateCategory({ categoryId, categoryName, categoryDetails }) {
    const updatedCategory = await this.repository.updateProductCategory({
      categoryId: categoryId,
      categoryDetails: categoryDetails,
      categoryName: categoryName,
    });

    if (updatedCategory == null)
      throw new APIError('unable to update category');

    const { category_id, category_name, details } = updatedCategory;

    return { category_id, category_name, details };
  }

  async deleteCategory({ categoryId }) {
    return this.repository.deleteCategory({
      categoryId: categoryId,
    });
  }
}

module.exports = ProductCategoryService;
