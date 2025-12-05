import { Router } from "express";
import { UserHandler } from "../handlers/user";

const router = Router();

const userHandler = new UserHandler();

router.get("/", userHandler.getUsers);
router.get("/:id", userHandler.getUsersById);

router.post("/", userHandler.createUser);

export default router;
