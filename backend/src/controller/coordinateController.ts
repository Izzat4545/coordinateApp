import { Request, Response } from "express";
import { generateRandomCoordinate } from "../utils/coordinateGenerator";
import {
  createCoordinate,
  getAllCoordinates,
} from "../service/coordinateService";

export const coordinateGetController = async (req: Request, res: Response) => {
  try {
    const coordinates = await getAllCoordinates();

    res.status(200).json(coordinates);
  } catch (error) {
    // Use type assertion for error
    res.status(500).json({ error: (error as Error).message });
  }
};

export const coordinatePostController = async (req: Request, res: Response) => {
  try {
    const { latitude, longitude } = generateRandomCoordinate();
    const coordinate = await createCoordinate(latitude, longitude);

    res.status(201).json(coordinate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
