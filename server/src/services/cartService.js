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
            await cart.save();
            return cart.populate('shoes.shoeId')
        }

        cart.shoes.push({ shoeId, quantity: 1 });
        return await cart.save();
    },

    async updateQuantity(userId, shoeId, operationType) {

        const cart = await Cart.findOne({ owner: userId });
        const shoe = cart.shoes.find(s => s.shoeId.toString() === shoeId);

        if (operationType === "increase") {
            shoe.quantity++;
        } else {

            if (shoe.quantity === 0) {
                return cart.populate('shoes.shoeId')
            }
            shoe.quantity--;
        }

        await cart.save();
        return cart.populate('shoes.shoeId')
    }

};

export default cartService;