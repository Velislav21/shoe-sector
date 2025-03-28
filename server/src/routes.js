import { Router } from "express";

import authController from "./controllers/userController.js";
import shoeController from "./controllers/shoeController.js";
import cartController from "./controllers/cartController.js";
const routes = Router();

routes.use('/users', authController);
routes.use('/shoes', shoeController)
routes.use('/cart', cartController)

export default routes; 