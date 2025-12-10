import { ErrorCode } from "../enums/errors.enum";
import {
  InvalidCredentialsException,
  NotFoundException,
} from "../exceptions/base.error";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../defaults";

export class AuthService {
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new InvalidCredentialsException(
        "Incorrect Username",
        ErrorCode.INVALID_CREDENTIALS
      );
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new InvalidCredentialsException(
        "Incorrect Password",
        ErrorCode.INVALID_CREDENTIALS
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return { user, token }
  }
}
