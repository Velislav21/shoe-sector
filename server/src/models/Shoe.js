import { model, Schema, Types } from 'mongoose';

const shoeSchema = new Schema({
    name: {
        String,
        required: true,
        minLength: 2,
    },
    gender: {
        String,
        enum: ['men', 'women'],
        required: true,
    },
    image: {
        String,
        required: true,
        // validate: /^https?:\/\//
    },
    description: {
        String,
        required: true,
        minLength: 10,
        maxLength: 100,
    },
    likedList: [{
        // type: Types.ObjectId,
        // ref: 'User',
        String
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Shoe = model('Shoe', shoeSchema)

export default Shoe