import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import prisma from "../lib/prisma";
import { User } from "../generated/prisma/client";

export class UserHandler {
  getUsers = async (request: Request, response: Response) => {
    const users = await prisma.user.findMany();
    response.status(200).json({success:"true", data:users})
  };

  getUsersById = (request: Request, response: Response) => {
    response.send({ success: true, data: { name: "benz", age: 30 } });
  };

  createUser = (
    request: Request<{}, {}, CreateUserDto>,
    response: Response
  ) => {};
}
