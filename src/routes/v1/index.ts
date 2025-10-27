/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import { time, timeStamp } from "console";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
   res.status(200).json({
      message: "API v1 is working!",
      status: "ok",
      version: "1.0.0",
      timeStamp: new Date().toISOString(),
   });
});

export default router;
