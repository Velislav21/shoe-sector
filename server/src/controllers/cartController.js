import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import cartService from "../services/cartService.js";
import getError from "../utils/error.js";

const cartController = Router();

cartController.get("/", isAuth, async (req, res) => {

    const userId = req.user._id;
    try {
        const { shoes } = await cartService.getCart(userId);
        res.status(200).json(shoes);

    } catch (error) {
        const err = getError(error)
        res.status(404).json({ message: err });
    }
})

cartController.post("/add/:shoeId", isAuth, async (req, res) => {
    const shoeId = req.params.shoeId;
    const userId = req.user._id;
    try {
        const cart = await cartService.addToCart(userId, shoeId);
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json(getError(error));
    }
});


cartController.patch("/edit/quantity/:shoeId", isAuth, async (req, res) => {
    const userId = req.user._id
    const shoeId = req.params.shoeId
    const { operationType } = req.body

    try {
        const { shoes } = await cartService.updateQuantity(userId, shoeId, operationType)
        res.status(200).json(shoes)
    } catch (error) {
        res.status(400).json(getError(error))
    }
})

cartController.patch("/remove/:cartItemId", isAuth, async (req, res) => {
    const userId = req.user._id;
    const cartItemId = req.params.cartItemId

    try {
        const { shoes } = await cartService.removeFromCart(cartItemId, userId)
        res.status(200).json(shoes)
    } catch (err) {
        res.status(400).json(getError(err))
    }
})

cartController.delete("/delete", isAuth, async (req, res) => {
    const userId = req.user._id;

    try {
        await cartService.deleteCart(userId);
        res.status(200).json({ message: "Cart is deleted" })
    } catch (err) {
        res.status(400).json(getError(err))
    }
})

export default cartController