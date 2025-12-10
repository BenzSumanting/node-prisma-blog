import { ErrorCode } from "../enums/errors.enum";

export class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: ErrorCode;

  constructor(message: string, errorCode: any, statusCode: number, error: any) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    (this.statusCode = statusCode), (this.errors = error);
  }
}

export class BadRequestsException extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 400, null);
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 400, null);
  }
}

export class InvalidCredentialsException extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 400, null);
  }
}
