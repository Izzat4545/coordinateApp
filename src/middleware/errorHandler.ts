import { Request, Response } from "express";
import { logger } from "../config/logger/loggerMain";

// Generic error handler
export const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: Function
) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).send("Something broke!");
};

export const handleNotFound = (req: Request, res: Response) => {
  res.status(404).send("Not Found");
  logger.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
};
