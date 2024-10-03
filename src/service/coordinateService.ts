import { CoordinateModel } from "../models/coordinateModel";

export const createCoordinate = async (lat: number, long: number) => {
  try {
    return await CoordinateModel.create({ latitude: lat, longitude: long });
  } catch (error) {
    throw new Error(`Error creating coordinate: ${(error as Error).message}`);
  }
};

export const getAllCoordinates = async () => {
  try {
    return await CoordinateModel.findAll();
  } catch (error) {
    throw new Error(`Error fetching coordinates: ${(error as Error).message}`);
  }
};
