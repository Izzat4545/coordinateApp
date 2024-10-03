import {
  coordinateGetController,
  coordinatePostController,
} from "../controller/coordinateController";
import { Router } from "express";

export const authRoutes = Router();

authRoutes.get("", coordinateGetController);
authRoutes.post("", coordinatePostController);
