import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.ts";

const router = new Router();

router
  .get("/api/v1/products", getAllProducts)
  .get("/api/v1/product/:id", getProductById)
  .post("/api/v1/products", addProduct)
  .put("/api/v1/product/:id", updateProduct)
  .delete("/api/v1/product/:id", deleteProduct);

export default router;
