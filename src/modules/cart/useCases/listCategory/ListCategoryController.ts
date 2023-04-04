import { Request, Response } from "express"; 
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoryUseCase.execute();

    return res.json(all);
  }
}
export { ListCategoryController };