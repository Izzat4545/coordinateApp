import { handleErrors, handleNotFound } from "./middleware/errorHandler";
import { authRoutes } from "./route/coordinateRoutes";
import express from "express";
import { requestLogger } from "./middleware/requestLogger";

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use("/coordinates", authRoutes);

app.use(handleErrors);
app.use(handleNotFound);

export default app;
