import config from "@/config";
import type { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
   origin(requestOrigin, callback) {
      if (
         config.NODE_ENV === "development" ||
         !requestOrigin ||
         config.WHITELISTED_DOMAINS.includes(requestOrigin)
      ) {
         callback(null, true);
      } else {
         callback(new Error("Not allowed by CORS"));
      }
   },
};
