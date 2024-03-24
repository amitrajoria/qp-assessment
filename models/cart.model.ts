import mongoose, { Schema, model } from 'mongoose';
import { CartSchema } from '../utils/constants/types';

const cartItemSchema = new Schema({
    grocery_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'grocery',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });
  
  const cartSchema = new Schema<CartSchema>({
    items: {
      type: [cartItemSchema],
      required: true,
      default: [],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    active: {
        type : Boolean,
        default: true,
    }
  }, {
    timestamps: true,
  });

export const CartModel = model<CartSchema>("cart", cartSchema);