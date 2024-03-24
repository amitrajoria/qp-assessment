import { cartService } from ".";
import { OrderModel } from "../models/order.model";
import { OrderSchema } from "../utils/constants/types";

export const placeOrder = async (payload: OrderSchema) => {
    console.log({payload})
    const order = await OrderModel.create(payload);
    await cartService.editCart(payload.cart_id as unknown as string, {user_id: payload.user_id, active: false});
    return order;
};

