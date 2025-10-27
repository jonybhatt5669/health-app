/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import { app } from "@/app";

import config from "@/config/index";
import v1Routes from "@/routes/v1";
import { connectToDatabase } from "./lib/mongoose";
import { logger } from "./utils/winstonLogger";

(async () => {
   try {
      await connectToDatabase();
      app.use("/api/v1", v1Routes);
      app.listen(config.PORT, () => {
         logger.info(`Server is running on http://localhost:${config.PORT}`);
      });
   } catch (error) {
      logger.error(`Faled to start server: ${error}`);

      if (config.NODE_ENV === "production") {
         process.exit(1);
      }
   }
})();
