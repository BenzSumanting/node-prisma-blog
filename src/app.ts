import express from "express";
import { PORT } from "./defaults";
import bodyParser from "body-parser";
import { errorMiddleware } from "./middlewares/error.middleware";
import { successMiddleware } from "./middlewares/success.middleware";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use(successMiddleware);

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
