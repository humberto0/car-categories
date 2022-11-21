import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: "teste",
    duration: 20,
    educator: "Humberto",
  });
  return res.send();
}
