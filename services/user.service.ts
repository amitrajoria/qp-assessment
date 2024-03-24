import { UserModel } from '../models/user.model';
import { LoginPayload, UserSchema } from '../utils/constants/types';
import bcrypt from 'bcrypt';

export const createUser = async (userBody: UserSchema) => {
  const {email} = userBody;
  if (await UserModel.findOne({ email })) {
    throw new Error('Email already taken');
  }
  return await UserModel.create(userBody);
};

export const loginUser = async (userBody: LoginPayload) => {
  const {email, password} = userBody;
  const user = await UserModel.findOne({ email });
  if (!user || !await bcrypt.compare(password, user?.password)) {
    throw new Error('Incorrect email or password');
  }
  return user;
};