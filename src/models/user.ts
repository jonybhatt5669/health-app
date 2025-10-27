/**
 * @copyright 2025 jitbjony
 * @license Apache-2.0
 */

import { UserRole } from "@/lib/enums";
import { Schema, model } from "mongoose";

export interface IUser {
   fullName: string;
   email: string;
   password: string;
   role: UserRole;
   gender?: string;
   dateOfBirth?: string;
   avatarUrl?: string;
   studentId: string;
}

const userSchema = new Schema<IUser>(
   {
      fullName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: {
         type: String,
         enum: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.STUDENT],
         default: UserRole.STUDENT,
      },
      gender: { type: String },
      dateOfBirth: { type: String },
      avatarUrl: { type: String },
      studentId: { type: String, required: true, unique: true },
   },
   {
      timestamps: true,
   },
);

export default model<IUser>("User", userSchema);
