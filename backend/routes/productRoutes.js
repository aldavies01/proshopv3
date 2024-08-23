import express from "express";
import {
  getProducts,
  GetProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(GetProductById);

export default router;
