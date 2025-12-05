import { Router } from "express";
import { createUser, getUsers, getUsersById } from "../handlers/user";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id',getUsersById);

userRouter.post('/',createUser)


export {userRouter}