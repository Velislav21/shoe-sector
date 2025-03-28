import Cart from '../models/Cart.js';

const cartService = {

    async getCart(userId) {

        const cart = await Cart.findOne({ owner: userId }).populate('shoes.shoeId');

        if (!cart) {
            throw new Error('Your cart is empty!');
        }
        return cart;
    },

    async addToCart(userId, shoeId) {

        const cart = await Cart.findOne({ owner: userId });

        if (!cart) {
            const cart = await Cart.create({ owner: userId, shoes: [{ shoeId, quantity: 1 }] });
            return cart;
        }

        const shoe = cart.shoes.find(s => s.shoeId.toString() === shoeId);

        if (shoe) {
            shoe.quantity++;
            return await cart.save();
        }

        cart.shoes.push({ shoeId, quantity: 1 });
        return await cart.save();
    }

};

export default cartService;