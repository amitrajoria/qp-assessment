import { Request, Response } from "express";
import { userService } from "../services";
import jwt from 'jsonwebtoken';

const register = async (req: Request, res: Response): Promise<void> => {
  console.log("PAY ", req.body)
  try {
    const user = await userService.createUser(req.body);
    console.log(user);
    res.status(201).send({ user });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in register: ", error.message);
      res.status(400).send({ message: error.message || "Failed to register" });
    } else {
      console.log("Unknown error in register: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.loginUser(req.body);
    var token: string = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET!
    );
    res.status(200).send({ user, token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in login: ", error.message);
      res.status(400).send({ message: error.message || "Failed to login" });
    } else {
      console.log("Unknown error in login: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

export { register, login };
