import { Response } from "express";
import { orderService } from "../services";
import { CustomRequest } from "../utils/constants/types";

const createOrder = async (req: CustomRequest, res: Response): Promise<void> => {
  req.body.user_id = req.userId;
  try {
    const order = await orderService.placeOrder(req.body);
    res.status(201).send({ order });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in place order: ", error.message);
      res.status(400).send({ message: error.message || "Failed to place order" });
    } else {
      console.log("Unknown error in place order: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

export { createOrder };
