import { Router } from "express";
import { UserHandler } from "../handlers/user";

const userRouter = Router();

const userHandler = new UserHandler();

userRouter.get("/", userHandler.getUsers);
userRouter.get("/:id", userHandler.getUsersById);

userRouter.post("/", userHandler.createUser);

export default userRouter;
