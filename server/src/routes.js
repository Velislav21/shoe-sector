import { Router } from "express";

import authController from "./controllers/userController.js";
import shoeController from "./controllers/shoeController.js";
const routes = Router();

routes.use('/users', authController);
routes.use('/shoes', shoeController)

export default routes; 