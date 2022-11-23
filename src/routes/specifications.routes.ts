import { Router } from "express";
import { createSpecificationController } from "../modules/cart/useCases/createSpecificationService";
import { listSpecificationController } from "../modules/cart/useCases/listSpecification";
const specificationRoutes = Router();


specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
  return listSpecificationController.handle(req, res);
});

export { specificationRoutes };
