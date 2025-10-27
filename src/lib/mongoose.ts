/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */
import mongoose, { ConnectOptions } from "mongoose";
import config from "@/config";
import { log } from "console";
import { logger } from "@/utils/winstonLogger";

const clientOptions: ConnectOptions = {
   dbName: config.DB_NAME,
   appName: "HealthApp API",
   serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
   },
};

export const connectToDatabase = async () => {
   if (!config.DB_URI) {
      throw new Error("Database URI is not defined in the configuration.");
   }

   try {
      await mongoose.connect(config.DB_URI, clientOptions);
      logger.info("Connected to MongoDB successfully.", {
         uri: config.DB_URI,
         options: clientOptions,
      });
   } catch (error) {
      if (error instanceof Error) {
         logger.error("Error connecting to MongoDB:", error.message);
         throw error;
      }
      logger.error("Unknown error connecting to MongoDB:", error);
      throw new Error("Unknown error connecting to MongoDB");
   }
};

export const disconnectFromDatabase = async () => {
   try {
      await mongoose.disconnect();
      logger.warn("Disconnected from MongoDB successfully.");
   } catch (error) {
      if (error instanceof Error) {
         logger.error("Error disconnecting from MongoDB:", error.message);
         throw error;
      }
      console.error("Unknown error disconnecting from MongoDB:", error);
      throw new Error("Unknown error disconnecting from MongoDB");
   }
};
