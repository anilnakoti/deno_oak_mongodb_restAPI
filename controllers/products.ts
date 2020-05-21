import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const client = new MongoClient();

client.connectWithUri("mongodb://localhost:27017");

const db = client.database("ecommerce");
const products = db.collection("products");

// @desc   Get all products
// @route  GET /api/v1/products

const getAllProducts = async ({ response }: { response: any }) => {
  const productList = await products.find();

  if (productList.length) {
    response.status = 200;
    response.body = {
      success: true,
      products: productList,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "Products not found",
    };
  }
};

// @desc   Get product bu id
// @route  GET /api/v1/product/:id

const getProductById = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product = await products.findOne({ product_id: params.id });

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "Product not found",
    };
  }
};

// @desc    Add a product
// @route   POST /api/v1/products

const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const productBody = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      message: "product body not found",
    };
  } else {
    const product = productBody.value;

    product.product_id = v4.generate();
    await products.insertOne({ ...product });

    response.status = 200;
    response.body = {
      success: true,
      message: "Product added sucessfully",
    };
  }
};

// @desc   Update a product
// @route  PUT /api/v1/product/:id

const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const product = await products.findOne({ product_id: params.id });

  if (product) {
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        message: "Product body not found",
      };
    } else {
      const productBody = await request.body();

      const updatedProduct: {
        name?: string;
        description?: string;
        price?: number;
      } = productBody.value;

      const { matchedCount, modifiedCount } = await products
        .updateOne(
          { product_id: params.id },
          { $set: { ...updatedProduct } },
        );

      if (matchedCount === 1 && modifiedCount === 1) {
        response.status = 200;
        response.body = {
          success: true,
          message: "Product updated",
        };
      } else {
        response.status = 404;
        response.body = {
          success: false,
          message: "Unable updated product",
        };
      }
    }
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "Product not found",
    };
  }
};

// @desc   Delete a product
// @route  DELETE /api/v1/product/:id

const deleteProduct = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const productDeleteCount = await products.deleteOne(
    { product_id: params.id },
  );

  if (productDeleteCount === 1) {
    response.status = 200;
    response.body = {
      success: true,
      message: "Product deleted",
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "Unable to delete product",
    };
  }
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
