import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import getError from "../utils/error.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { name, email, password, rePassword } = req.body;
    try {
        const user = await userService.register(name, email, password, rePassword); //confirmPassword
        res.cookie(AUTH_COOKIE_NAME, user.accessToken,
            {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            });
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
        res.cookie(AUTH_COOKIE_NAME, user.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        res.status(200).json(user);

    } catch (err) {
        console.log(err);
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

userController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.json({ message: 'Logged out successfully' });
})

export default userController