import { Router } from "express";
import {
  coordinateGetController,
  coordinatePostController,
} from "../controller/coordinateController";

export const authRoutes = Router();

authRoutes.get("", coordinateGetController);
authRoutes.post("", coordinatePostController);
