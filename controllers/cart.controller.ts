import { Request, Response } from "express";
import { cartService } from "../services";
import { CustomRequest } from "../utils/constants/types";

const getCart = async (req: CustomRequest, res: Response): Promise<void> => {
  try {
    const cart = await cartService.getCartItem(req.userId as string);
    res.status(201).send({ cart });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in get cart: ", error.message);
      res.status(400).send({ message: error.message || "Failed to get cart" });
    } else {
      console.log("Unknown error in get cart: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

const addToCart = async (req: CustomRequest, res: Response): Promise<void> => {
  req.body.user_id = req.userId;
  try {
    const cart = await cartService.createCart(req.body);
    res.status(201).send({ cart });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in add to Cart: ", error.message);
      res.status(400).send({ message: error.message || "Failed to add to cart" });
    } else {
      console.log("Unknown error in add to Cart: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

const updateCart = async (req: CustomRequest, res: Response): Promise<void> => {
  req.body.user_id = req.userId;
  try {
    const cart = await cartService.editCart(req.params.cartId, req.body);
    res.status(200).send({ cart });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in update to Cart: ", error.message);
      res.status(400).send({ message: error.message || "Failed to update to cart" });
    } else {
      console.log("Unknown error in update to Cart: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

const deleteCart = async (req: CustomRequest, res: Response): Promise<void> => {
  try {
    const grocery = await cartService.deleteCart(req.params.cartId, req.userId as string);
    res.status(200).send({ grocery });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in delete to Cart: ", error.message);
      res.status(400).send({ message: error.message || "Failed to delete to cart" });
    } else {
      console.log("Unknown error in delete to Cart: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

export { getCart, addToCart, updateCart, deleteCart };
