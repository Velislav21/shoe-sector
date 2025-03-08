import bcrypt from 'bcrypt';
import jwt from '../jwt.js';
import User from '../models/User.js'

const userService = {
    async register(username, email, password, rePassword) {

        const user = await User.findOne({ $or: [{ email }, { username }] });

        if (user) {
            throw new Error('User is already registered');
        }
        if (password !== rePassword) {
            throw new Error('Passwords must match!');
        }
        const newUser = await User.create({ username, email, password });

        return generateResponse(newUser)
    },
    async login(email, password) {

        const user = await User.findOne({ email }); 
        if (!user) {
            throw new Error('Incorrect email address!');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid){
            throw new Error('Invalid password!')
        }
        return generateResponse(user);
    },
}

async function generateResponse(user) { 
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
    }
 
    const header = { expiresIn: '1d' };

    console.log(process.env.JWT_SECRET)
    const token = await jwt.sign(payload, process.env.JWT_SECRET, header)
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
    }
}

export default userService;