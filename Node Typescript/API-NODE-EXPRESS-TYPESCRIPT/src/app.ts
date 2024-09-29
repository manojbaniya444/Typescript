import express from "express";
import config from "config";
import connectdb from "./utils/dbConnection";
import logger from "./utils/logger";
import routes from "./routes";

const PORT = config.get<number>("port");

const app = express();

app.listen(PORT, async () => {
  await connectdb();
  routes(app);
  logger.info("Server is running on port 8080.");
});
