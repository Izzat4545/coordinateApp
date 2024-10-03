import { AppModes } from "../../utils/enums/appModes";
import { devLogger } from "./loggerDev";
import dotenv from "dotenv";
import { getEnv } from "../../utils/getEnv";
import { productionLogger } from "./loggerProd";
import winston from "winston";

dotenv.config();

export let logger: winston.Logger;
const mode = getEnv("NODE_ENV");

if (mode === AppModes.PRODUCTION) {
  logger = productionLogger();
} else if (mode === AppModes.DEVELOPMENT) {
  logger = devLogger();
} else {
  logger = devLogger();
}
