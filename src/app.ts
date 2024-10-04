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

app.use(cors(corsOptions));
app.use("/coordinates", authRoutes);

app.use(handleErrors);
app.use(handleNotFound);

export default app;
