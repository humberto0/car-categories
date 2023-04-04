import { Response, Request } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";


class ListSpecificationController{
  constructor(private listSpecificationUseCase: ListSpecificationUseCase ) {}

  handle(req: Request,res: Response): Response {
    const all = this.listSpecificationUseCase.execute();
    return res.json(all);
  }
}

export { ListSpecificationController }