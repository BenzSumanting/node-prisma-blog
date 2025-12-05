import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export class UserHandler {
  getUsers = (request: Request, response: Response) => {
    response.send([]);
  };

  getUsersById = (request: Request, response: Response) => {
    response.send({ success: true, data: { name: "benz", age: 30 } });
  };

  createUser = (
    request: Request<{}, {}, CreateUserDto>,
    response: Response
  ) => {};
}
