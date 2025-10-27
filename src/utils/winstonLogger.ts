/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import winston from "winston";
import config from "@/config";

const { combine, timestamp, printf, colorize } = winston.format;

const transport: winston.transport[] = [];

if (process.env.NODE_ENV !== "production") {
   transport.push(
      new winston.transports.Console({
         format: combine(
            colorize({ all: true }),
            timestamp({ format: "YYYY-MM-DD HH:mm:ss A" }),
            printf(({ level, message, timestamp, ...meta }) => {
               const metaStr = Object.keys(meta).length
                  ? `\n${JSON.stringify(meta, null, 2)}`
                  : "";
               return `[${timestamp}] ${level.toUpperCase()}: ${message}${metaStr}`;
            }),
         ),
      }),
   );
}

const logger = winston.createLogger({
   level: "info",
   format: combine(timestamp()),
   transports: transport,
   silent: config.NODE_ENV === "test",
});

export { logger };
