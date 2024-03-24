import mongoose from "mongoose";
import { Request } from 'express';

export enum Roles {
    USER = 'user',
    ADMIN = 'admin',
}

export interface CustomRequest extends Request {
    userId?: string;
}

export interface UserSchema {
    email: string;
    password: string;
    role:  Roles;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface GrocerySchema {
    name: string;
    description: string;
    price: number;
}

interface CartItem {
    grocery_id: mongoose.Schema.Types.ObjectId;
    quantity: number;
}

export interface CartSchema {
    items?: CartItem[],
    user_id?: mongoose.Schema.Types.ObjectId;
    active: boolean
}

export interface OrderSchema {
    cart_id: mongoose.Schema.Types.ObjectId;
    user_id: mongoose.Schema.Types.ObjectId;
}