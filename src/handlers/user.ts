import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { UserService } from "../services/user.service";

export class UserHandler {
  private userService = new UserService();
  getUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getUsers();
    return res.status(200).json({ success: "true", data: users });
  };

  getUsersById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const user = await this.userService.getUserById(Number(id));

    return res.status(200).json({ success: "true", data: user });
  };

  createUser = async (
    req: Request<{}, {}, CreateUserDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.createUser(req.body);

      res.status(200).json(user);
    } catch (error: any) {
      next(error);
    }
  };
}
