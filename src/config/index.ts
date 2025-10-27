/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import dotenv from "dotenv";

dotenv.config();

const config = {
   PORT: process.env.PORT || 3000,
   DB_URI: process.env.DB_URI || "mongodb://localhost:27017/myapp",
   JWT_SECRET: process.env.JWT_SECRET,
   NODE_ENV: process.env.NODE_ENV,
   WHITELISTED_DOMAINS: process.env.WHITELISTED_DOMAINS
      ? process.env.WHITELISTED_DOMAINS.split(",")
      : [],
   DB_NAME: process.env.DB_NAME || "myapp",
};

export default config;
