import { CartModel } from "../models/cart.model";
import { CartSchema } from "../utils/constants/types";

export const createCart = async (payload: CartSchema) => {
  const cart = await CartModel.findOne({user_id: payload.user_id});
  if (cart) {
    throw new Error('User can have only one cart!');
  }
  return await CartModel.create({items: payload, user_id: payload.user_id});
};

export const editCart = async (id: string, payload: CartSchema) => {
  const cart = await CartModel.findOne({_id: id});
  if (!cart || !cart.active) {
    throw new Error('Cart not found');
  }
  console.log({cart, payload});
  if(String(cart?.user_id) !==  String(payload?.user_id))
    throw new Error("Not authorized!");

  return await CartModel.findByIdAndUpdate(id, payload, {new: true});
};

export const deleteCart = async (id: string, user_id: string) => {
  const cart = await CartModel.findOne({_id: id});
  if (!cart || !cart.active) {
    throw new Error('Cart not found');
  }

  if(String(cart?.user_id) !==  String(user_id))
    throw new Error("Not authorized!");

  return await CartModel.findByIdAndDelete(id);
};

export const getCartItem = async (user_id: string) => {
  const cart = await CartModel.findOne({user_id});
  if (!cart || !cart.active) {
    throw new Error("Cart doesn't exists!");
  }
  return cart;
};
