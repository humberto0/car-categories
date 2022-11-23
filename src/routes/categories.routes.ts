import { Router } from "express";
import { createCategoryController } from "../modules/cart/useCases/createCategory";
import { listCategoryController } from "../modules/cart/useCases/listCategory";
import multer from "multer";
import { importCategoryController } from "../modules/cart/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
 return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
 return listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file") ,(req, res) => {
  return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
