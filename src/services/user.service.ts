import { CreateUserDto } from "../dtos/CreateUser.dto";
import { User } from "../generated/prisma/client";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user.repository";

const userRepo = new UserRepository();

export class UserService {

  async getUsers(): Promise<User[]> {
    return userRepo.findAll();
  }

  async getUserById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const salt = 10;

    const { password, ...other } = data;
    const hashed = await bcrypt.hash(password, salt);

    const user = await userRepo.create({
        data: {
            ...other,
            password: hashed
        }
    })

    // const user = await prisma.user.create({
    //   data: {
    //     ...other,
    //     password: hashed,
    //   },
    // });

    return user;
  }
}
