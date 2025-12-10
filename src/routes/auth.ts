import { Router } from "express";
import { AuthHandler } from "../handlers/auth";

const authRouter = Router();

const authhandler = new AuthHandler;

authRouter.post("/login",authhandler.login);

export default authRouter;