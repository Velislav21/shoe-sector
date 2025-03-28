import { model, Schema, Types } from 'mongoose';

const cartSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    shoes: [
        {
            shoeId: {
                type: Types.ObjectId,
                ref: 'Shoe',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
        }
    ],
})

const Cart = model('Cart', cartSchema)

export default Cart