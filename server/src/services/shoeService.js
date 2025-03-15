import Shoe from "../models/Shoe.js";

const shoeService = {

    getAll(filter = {}) {
        const query = Shoe.find()
        if (filter.name) {
            query.find({ name: { $regex: filter.name, $options: 'i' } })
        }

        return query
    },
    getOne(shoeId) {
        return Shoe.findById(shoeId);
    },
    create(shoeData) {
        return Shoe.create(shoeData); // owner: userId
    },
    remove(shoeId) {
        return Shoe.findByIdAndDelete(shoeId);
    },
    update(shoeId, shoeData) {
        return Shoe.findByIdAndUpdate(shoeId, shoeData,
            {
                runValidators: true,
                new: true
            });
    },
    like(shoeId, userId) {
        return Shoe.findByIdAndUpdate(shoeId, { $push: { likedList: userId } })
    }
}

export default shoeService;