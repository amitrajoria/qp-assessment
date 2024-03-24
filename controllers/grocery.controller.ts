import { Request, Response } from "express";
import { groceryService } from "../services";

const getAllGrocery = async (req: Request, res: Response): Promise<void> => {
  console.log("PAYLOAD ", req.body);
  try {
    const groceries = await groceryService.getAllGroceries();
    res.status(201).send({ groceries });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in get all grocery: ", error.message);
      res.status(400).send({ message: error.message || "Failed to get all grocery" });
    } else {
      console.log("Unknown error in get all grocery: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

const addGrocery = async (req: Request, res: Response): Promise<void> => {
  console.log("PAYLOAD ", req.body);
  try {
    const grocery = await groceryService.createGrocery(req.body);
    res.status(201).send({ grocery });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in add grocery: ", error.message);
      res.status(400).send({ message: error.message || "Failed to add grocery" });
    } else {
      console.log("Unknown error in add grocery: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

const updateGrocery = async (req: Request, res: Response): Promise<void> => {
  try {
    const grocery = await groceryService.editGrocery(
      req.params.itemId,
      req.body
    );
    res.status(200).send({ grocery });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in update grocery: ", error.message);
      res.status(400).send({ message: error.message || "Failed to update grocery" });
    } else {
      console.log("Unknown error in update grocery: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

const deleteGrocery = async (req: Request, res: Response): Promise<void> => {
  try {
    const grocery = await groceryService.deleteGrocery(req.params.itemId);
    res.status(200).send({ grocery });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error in dalete grocery: ", error.message);
      res.status(400).send({ message: error.message || "Failed to dalete grocery" });
    } else {
      console.log("Unknown error in dalete grocery: ", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

export { addGrocery, updateGrocery, deleteGrocery, getAllGrocery };
