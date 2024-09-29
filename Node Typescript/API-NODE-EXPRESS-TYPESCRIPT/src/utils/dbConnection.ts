import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connectdb = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    const connectionInstance = await mongoose.connect(dbUri);
    logger.info("Mongodb database connection successful.");
  } catch (error) {
    logger.error(`Database connection ${error}`);
    process.exit(1);
  }
};

export default connectdb;
