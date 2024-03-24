import { Router } from "express";
import { groceryController } from "../controllers";
import auth from "../middlewares/auth";
import { rightsEnum } from "../utils/constants/roles";

const groceryRoute = Router();

groceryRoute
  .route("/")
  .get(auth(rightsEnum.MANAGE_GROCERY), groceryController.getAllGrocery)
  .post(auth(rightsEnum.MANAGE_GROCERY), groceryController.addGrocery);

groceryRoute
  .route("/:itemId")
  .delete(auth(rightsEnum.MANAGE_GROCERY), groceryController.deleteGrocery)
  .patch(auth(rightsEnum.MANAGE_GROCERY), groceryController.updateGrocery)

export { groceryRoute };
