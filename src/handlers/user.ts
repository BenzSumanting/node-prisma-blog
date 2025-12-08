import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import prisma from "../lib/prisma";
import { User } from "../generated/prisma/client";
import bcrypt from "bcrypt";
import { BadRequestsException } from "../exceptions/base.error";

export class UserHandler {
  getUsers = async (request: Request, response: Response) => {
    const users = await prisma.user.findMany();
    response.status(200).json({ success: "true", data: users });
  };

  getUsersById = (request: Request, response: Response) => {
    response.send({ success: true, data: { name: "benz", age: 30 } });
  };

  createUser = async (
    req: Request<{}, {}, CreateUserDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let salt = 10;

      const { password, ...other } = req.body;

      const hashed = await bcrypt.hash(password, salt);

      const user = await prisma.user.create({
        data: {
          ...other,
          password: hashed,
        },
      });

      res.status(201).json(user);

      // res.status(201).json({
      //   success: true,
      //   data: user,
      // });
    } catch (error: any) {
      // res.status(400).json({
      //   message: "Failed to create user",
      //   error: error.message,q
      // });
    }
  };
}
