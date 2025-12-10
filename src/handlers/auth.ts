import { AuthService } from "../services/auth.service";
import { Request, Response, NextFunction } from "express";

export class AuthHandler {
  private authService = new AuthService();

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const result = await this.authService.login(email, password);

      return res.json(result);
    } catch (error: any) {
      next(error);
    }
  };
}
