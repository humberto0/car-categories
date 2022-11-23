import { Router } from "express";
import{SpecificationRepository} from "../modules/cart/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cart/services/CreateSpecificationService";
const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  
  const createSpecificationService = new CreateSpecificationService(specificationRepository);
  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

specificationRoutes.get("/", (req, res) => {
  const all = specificationRepository.list();
  
  return res.json(all);
});

export { specificationRoutes };
