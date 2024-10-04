import { handleErrors, handleNotFound } from "./middleware/errorHandler";
import { authRoutes } from "./route/coordinateRoutes";
import cors from "cors";
import express from "express";
import { requestLogger } from "./middleware/requestLogger";

const app = express();

app.use(express.json());
app.use(requestLogger);

const corsOptions = {
  origin: ["http://devboi.site"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(handleNotFound);
app.use(handleErrors);
app.use(cors(corsOptions));
app.use("/coordinates", authRoutes);

export default app;
