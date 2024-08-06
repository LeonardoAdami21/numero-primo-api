import express from "express";
import cors from "cors";
import { envoriment } from "./env/envoriment.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };
import primoRouter from "./primo/pimo.router.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.urlencoded({ extended: true }));

app.use("/numero-primo", primoRouter);

app.listen(envoriment.appPort, () => {
  console.log(
    `Server is running on port http://localhost:${envoriment.appPort}/api-docs`,
  );
});
