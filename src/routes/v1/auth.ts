/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import { Router } from "express";
import register from "@/controller/v1/auth/register";

const router = Router();

router.post("/register", register);

export default router;
