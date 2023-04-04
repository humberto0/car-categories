import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";	

class CreateSpecificationController{
  constructor(private CreateSpecificationUseCase: CreateSpecificationUseCase) {}
  
 handle(req: Request, res: Response): Response {
  const { name, description } = req.body;
  this.CreateSpecificationUseCase.execute({ name, description });
  return res.status(201).send();
 }
}

export { CreateSpecificationController }