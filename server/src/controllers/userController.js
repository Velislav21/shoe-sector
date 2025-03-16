import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import userService from "../services/userService.js";
import getError from "../utils/error.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { name, email, password, rePassword } = req.body;
    try {
        const user = await userService.register(name, email, password, rePassword); //confirmPassword
        res.status(200).json(user);

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userService.login(email, password);
        res.status(200).json(user);

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

userController.get('/profile/:userId', isAuth, async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await userService.getProfile(userId);
        res.status(200).json(user);

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

userController.patch('/edit/:userId', async (req, res) => {
    const values = req.body;
    const userId = req.params.userId
    try {
        const updatedUser = await userService.edit(userId, values);
        // console.log(updatedUser)
        res.status(200).json(updatedUser);
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})


userController.delete('/profile/:userId', isAuth, async (req, res) => {
    const userId = req.params.userId
    try {
        await userService.delete(userId);
        res.status(200).json({ message: "User deleted" });
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

export default userController
