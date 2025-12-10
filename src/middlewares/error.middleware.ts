import { HttpException } from "../exceptions/base.error";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  error: HttpException | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const status = error.statusCode || 500;

  res.status(status).json({
    success: false,
    message: error.message || "Internal Server Error",
    errorCode: error.errorCode || null,
    errors: error.errors || null
  });

  next();
};
