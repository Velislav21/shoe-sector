import bcrypt from 'bcrypt';
import jwt from '../jwt.js';
import User from '../models/User.js'
import Cart from '../models/Cart.js';

const userService = {
    async register(name, email, password, rePassword) {

        const user = await User.findOne({ email }).select('email');

        if (user) {
            throw new Error('This email is already registered');
        }
        if (password !== rePassword) {
            throw new Error('Passwords must match!');
        }
        const newUser = await User.create({ name, email, password });

        return generateResponse(newUser)
    },
    async login(email, password) {

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('This email is not registered!');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid password!')
        }
        return generateResponse(user);
    },

    async getProfile(userId) {
        return await User.findById(userId).select("-password").lean();
    },

    async edit(userId, userData) {
        const updatedUser = await User.findByIdAndUpdate(userId, userData,
            {
                runValidators: true,
                new: true
            }).select("-password");
        return generateResponse(updatedUser);
    },
    async delete(userId) {
        await User.findByIdAndDelete(userId);
        await Cart.findOneAndDelete({ owner: userId })
        return
    },
}

async function generateResponse(user) {
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    }

    const header = { expiresIn: '1d' };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, header)
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        accessToken: token
    }
}

export default userService;