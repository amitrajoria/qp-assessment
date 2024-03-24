import { Router } from "express";
import { orderController } from "../controllers";
import auth from "../middlewares/auth";
import { rightsEnum } from "../utils/constants/roles";

const orderRoute = Router();

orderRoute
  .route("/")
  .post(auth(rightsEnum.PLACE_ORDER), orderController.createOrder);

export { orderRoute };
