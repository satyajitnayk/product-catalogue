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
    // check if product_category already exists
    const productCategoryExist = await ProductCategoryModel.findOne({
      where: {
        category_id: categoryId,
      },
    });

    if (productCategoryExist == null)
      throw new NotFoundError('unable to find the catgory of product ');

    const product = await ProductModel.create({
      category_id: categoryId,
      product_name: productName,
      details: productDetails,
      price: productPrice,
    });

    if (product == null) throw new APIError('unable to create product ');

    let { product_id, category_id, product_name, details, price } = product;

    return { product_id, category_id, product_name, details, price };
  }

  async getProductById({ productId }) {
    const product = await ProductModel.findOne({
      where: {
        product_id: productId,
      },
    });

    if (product == null)
      throw new NotFoundError('unable to get product for the given id');

    const { product_id, category_id, product_name, details, price } = product;

    return { product_id, category_id, product_name, details, price };
  }

  async getProductsByCategory({ categoryId }) {
    // First check if category id exists in category tabel
    const categoryExists = await ProductCategoryModel.findOne({
      where: {
        category_id: categoryId,
      },
    });

    if (categoryExists == null)
      throw new NotFoundError('unable to get product for the given category');

    const products = await ProductModel.findAll({
      where: {
        category_id: categoryId,
      },
    });

    if (products == null || (products && products?.length == 0)) {
      throw new NotFoundError('unable to get product for the given category');
    }

    let productsData = [];
    products.map((product) => {
      let { product_id, category_id, product_name, details, price } = product;

      productsData.push({
        product_id,
        category_id,
        product_name,
        details,
        price,
      });
    });

    return productsData;
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

    if (productExist == null) throw new NotFoundError('product not found');

    productExist.category_id = categoryId;
    productExist.product_name = productName;
    productExist.details = productDetails;
    productExist.price = productPrice;

    const updatedProduct = await productExist.save();

    if (updatedProduct == null) throw new APIError('unable to update product');

    const { product_id, category_id, product_name, details, price } =
      updatedProduct;

    return { product_id, category_id, product_name, details, price };
  }

  async deleteProduct({ productId }) {
    const count = await ProductModel.destroy({
      where: {
        product_id: productId,
      },
    });

    if (count == null || count == 0) {
      throw new NotFoundError('unable to delete the product');
    }

    return true;
  }
}

module.exports = ProductRepository;
