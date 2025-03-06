import { model, Schema, Types } from 'mongoose';

const shoeSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true,
    },
    gender: {
        type: String,
        enum: ['men', 'women'],
        required: true,
    },
    image: {
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