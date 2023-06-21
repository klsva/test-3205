import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler: ErrorRequestHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    return res.status(err.statusCode).send({
      error: err.message || err.errors[0].msg,
    });
  }
  next();
};