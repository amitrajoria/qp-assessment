import { GroceryModel } from "../models/grocery.model";
import { GrocerySchema } from "../utils/constants/types";

export const createGrocery = async (payload: GrocerySchema) => {
  return await GroceryModel.create(payload);
};

export const editGrocery = async (id: string, payload: GrocerySchema) => {
  return await GroceryModel.findByIdAndUpdate(id, payload, {new: true});
};

export const deleteGrocery = async (id: string) => {
  return await GroceryModel.findByIdAndDelete(id);
};

export const getAllGroceries = async () => {
  return await GroceryModel.find();
};
