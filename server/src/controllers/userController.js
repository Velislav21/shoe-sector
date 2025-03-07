import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import getError from "../utils/error.js";
const userController = Router();
userController.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;
    try {
        const response = await userService.register(username, email, password, rePassword); //confirmPassword
        res.cookie(AUTH_COOKIE_NAME, response.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',          
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        res.status(200).json(response);
        
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
userController.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const response = await userService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, response.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        res.status(200).json(response);

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