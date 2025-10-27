/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import { rateLimit } from "express-rate-limit";

const rateLimiter = rateLimit({
   windowMs: 1 * 60 * 1000, // 15 minutes
   max: 50, // limit each IP to 100 requests per windowMs
   standardHeaders: "draft-8", // Return rate limit info in the `RateLimit-*` headers
   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
   message: {
      status: 429,
      error: "Too many requests, please try again later.",
   },
});

export default rateLimiter;
