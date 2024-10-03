import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface CoordinateAttributes {
  id?: number;
  latitude: number;
  longitude: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CoordinateCreationAttributes
  extends Optional<CoordinateAttributes, "id" | "createdAt" | "updatedAt"> {}

export class CoordinateModel
  extends Model<CoordinateAttributes, CoordinateCreationAttributes>
  implements CoordinateAttributes
{
  public id!: number;
  public latitude!: number;
  public longitude!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CoordinateModel.init(
  {
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "coordinates",
    timestamps: true,
  }
);
