/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";

/**
 * Custom functions, configurations and routes
 */
import { corsOptions } from "./utils/corsOption";
import rateLimiter from "./utils/rate_limiter";

export const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
   compression({
      threshold: 1024,
   }),
);
app.use(helmet());

app.use(rateLimiter);
