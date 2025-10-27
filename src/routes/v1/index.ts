/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import { Router } from "express";
import authRouter from "./auth";
const router = Router();

router.get("/", (req, res) => {
   res.status(200).json({
      message: "API v1 is working!",
      status: "ok",
      version: "1.0.0",
      timeStamp: new Date().toISOString(),
   });
});

router.use("/auth", authRouter);

export default router;
