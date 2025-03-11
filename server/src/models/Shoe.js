import { model, Schema, Types } from 'mongoose';

const shoeSchema = new Schema({
    modelName: {
        type: String,
        minLength: 2,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Men', 'Women', 'Unisex'],
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        // validate: /^https?:\/\//
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 100,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    likedList: [{
        // type: Types.ObjectId,
        // ref: 'User',
        typoe: String
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Shoe = model('Shoe', shoeSchema)

export default Shoe