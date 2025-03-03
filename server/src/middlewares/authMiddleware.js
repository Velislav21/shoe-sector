import { AUTH_COOKIE_NAME, JWT_SECRET } from "../constants.js";
import jwt from "../jwt.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];
    
    if (!token) {
        req.isAuthenticated = false;
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, JWT_SECRET); // Should use process.env.JWT_SECRET
        req.user = decodedToken;
        req.isAuthenticated = true;
        res.locals.user = decodedToken;
        next();
    } catch (err) {
        res.clearCookie(AUTH_COOKIE_NAME);
        req.isAuthenticated = false;
        next();
    }
};

export const isAuth = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.status(401).json({ message: 'Please login!' });
    }
    next();
};

export const isGuest = (req, res, next) => {
    if (req.isAuthenticated) {
        return res.status(403).json({ message: 'Logged in users can\'t visit this page! ' });
    }
    next();
};
