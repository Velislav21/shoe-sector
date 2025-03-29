import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import cartService from "../services/cartService.js";
import getError from "../utils/error.js";

const cartController = Router();

cartController.get("/", isAuth, async (req, res) => {

    const userId = req.user._id;
    try {
        const { shoes } = await cartService.getCart(userId);
        res.json(shoes);

    } catch (error) {
        const err = getError(error)
        res.status(400).json({ message: err });
    }
})

cartController.post("/add/:shoeId", isAuth, async (req, res) => {
    const shoeId = req.params.shoeId;
    const userId = req.user._id;
    try {
        const cart = await cartService.addToCart(userId, shoeId);
        console.log(cart)
        res.json(cart);
    } catch (error) {
        res.status(400).json(getError(error));
    }
});


cartController.patch("/edit/quantity", isAuth, async (req, res) => {
    const userId = req.user._id
    const { operationType, shoeId } = req.body

    try {
        const { shoes } = await cartService.updateQuantity(userId, shoeId, operationType)
        res.status(200).json(shoes)
    } catch (error) {
        res.status(400).json(getError(error))
    }
})
export default cartController