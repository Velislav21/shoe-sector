import { Router } from "express";
import shoeService from "../services/shoeService.js";
import getError from "../utils/error.js";
import { isAuth } from "../middlewares/authMiddleware.js";
const shoeController = Router();

shoeController.get('/', async (req, res) => {

    const shoes = await shoeService.getAll().lean();

    return res.status(200).json(shoes);
})

shoeController.get('/details/:shoeId', async (req, res) => {

    const id = req.params.shoeId
    const shoe = await shoeService.getOne(id).lean();

    return res.status(200).json(shoe);
})

shoeController.post('/create', isAuth, async (req, res) => {

    const shoeData = req.body
    const ownerId = req.user._id
    try {
        const shoe = await shoeService.create({...shoeData, owner: ownerId});
        res.status(200).json(shoe);
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error });
    }
})

shoeController.patch('/update/:shoeId', isAuth, async (req, res) => {

    const shoeId = req.params.shoeId;
    const userId = req.user._id;
    const shoeData = req.body;

    try {
        // const shoe = await shoeService.getOne(shoeId)
        // if (shoe.owner.toString() !== userId.toString()) {

        const ownerId = await shoeService.getOne(shoeId).select('owner');
        
        if (ownerId.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Unauthorized!' });
        }
        
        const result = await shoeService.update(shoeId, shoeData);
        res.status(200).json(result);
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error });
    }
})

export default shoeController