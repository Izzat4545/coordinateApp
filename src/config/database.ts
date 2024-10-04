import { Sequelize } from "sequelize";
import { getEnv } from "../utils/getEnv";

const username = getEnv("DB_USERNAME");
const password = getEnv("DB_PASSWORD");
const dbName = getEnv("DB_NAME");
const dbHost = getEnv("DB_HOST");

export const sequelize = new Sequelize(dbName, username, password, {
  host: dbHost,
  dialect: "postgres",
});
