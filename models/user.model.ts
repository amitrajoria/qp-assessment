import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { Roles, UserSchema } from '../utils/constants/types';

// Define User Schema
const userSchema = new Schema<UserSchema>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: Roles.USER,
  }
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

export const UserModel = model<UserSchema>("user", userSchema);