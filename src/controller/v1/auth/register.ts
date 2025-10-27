/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import type { Request, Response } from "express";

import { logger } from "@/utils/winstonLogger";
import config from "@/config";
import User, { IUser } from "@/models/user";

const register = async (req: Request, res: Response) => {
   const {
      email,
      fullName,
      password,
      studentId,
      avatarUrl,
      dateOfBirth,
      gender,
   } = req.body as IUser;
   try {
      const existingUser = await User.findOne({
         email,
      });

      if (existingUser) {
         return res.status(400).json({
            message: "User with this email already exists",
            status: "error",
            timestamp: new Date().toISOString(),
         });
      }

      await User.create({
         email,
         fullName,
         password,
         studentId,
         avatarUrl,
         dateOfBirth,
         gender,
      });
      res.status(201).json({
         message: "User registered successfully",
         status: "success",
         timestamp: new Date().toISOString(),
      });
   } catch (error) {
      if (error instanceof Error) {
         logger.error(`Error in register controller: ${error.message}`);
         res.status(500).json({
            message: "Internal Server Error",
            status: "error",
            timestamp: new Date().toISOString(),
         });
      }
   }
};

export default register;
