import app from "./app";
import { sequelize } from "./config/database";
import { logger } from "./config/logger/loggerMain";
import { getEnv } from "./utils/getEnv";

const PORT = getEnv("PORT");

sequelize
  .sync()
  .then(() => {
    logger.info("Database connected and models synced");
    app.listen(PORT, () => {
      logger.info(`Server is running on port localhost:${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("Unable to connect to the database:", err);
  });
