import { Router } from "express";
import { cartController, groceryController } from "../controllers";
import auth from "../middlewares/auth";
import { rightsEnum } from "../utils/constants/roles";

const cartRoute = Router();

cartRoute
  .route("/")
  .get(auth(rightsEnum.MANAGE_CART), cartController.getCart)
  .post(auth(rightsEnum.MANAGE_CART), cartController.addToCart);

cartRoute
  .route("/:cartId")
  .delete(auth(rightsEnum.MANAGE_CART), cartController.deleteCart)
  .patch(auth(rightsEnum.MANAGE_CART), cartController.updateCart)

export { cartRoute };
