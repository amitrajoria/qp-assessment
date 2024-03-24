import mongoose, { Schema, model } from 'mongoose';
import { OrderSchema } from '../utils/constants/types';

// Define User Schema
const orderSchema = new Schema<OrderSchema>({
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cart',
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }
}, {
    timestamps: true
});


export const OrderModel = model<OrderSchema>("order", orderSchema);