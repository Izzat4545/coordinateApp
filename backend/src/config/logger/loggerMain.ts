import { productionLogger } from "./loggerProd";
import { devLogger } from "./loggerDev";
import winston from "winston";
import dotenv from "dotenv";
import { AppModes } from "../../utils/enums/appModes";
import { getEnv } from "../../utils/getEnv";

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
