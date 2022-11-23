import { Router } from "express";
import { createCategoryController } from "../modules/cart/useCases/createCategory";
import { listCategoryController } from "../modules/cart/useCases/listCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
 return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
 return listCategoryController.handle(req, res);
});

export { categoriesRoutes };
