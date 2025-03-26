import { model, Schema, Types } from 'mongoose';

const shoeSchema = new Schema({
    modelName: {
        type: String,
        minLength: [2, "Model name must be at least 2 characters long"],
        required: true,
    },
    brand: {
        type: String,
        minLength: [2, "Brand name must be at least 2 characters long"],
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
        validate: [/^https?:\/\//, "Invalid URL"]
    },
    description: {
        type: String,
        minLength: [10, "Description must be at least 10 characters long"],
        required: true,
    },
    price: {
        type: Number,
        min: [1, "The price can't be lower than 1"],
        required: true,
    },
    likedList: [{
        type: Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Shoe = model('Shoe', shoeSchema)

export default Shoe