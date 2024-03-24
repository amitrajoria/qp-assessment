import { Schema, model } from 'mongoose';
import { GrocerySchema } from '../utils/constants/types';

// Define User Schema
const grocerySchema = new Schema<GrocerySchema>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  }
}, {
    timestamps: true
});


export const GroceryModel = model<GrocerySchema>("grocery", grocerySchema);