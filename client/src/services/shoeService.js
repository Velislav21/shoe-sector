import { BASE_URL } from "../constants/constants";
import request from "../api/requester";

export default {
    getAll() {
        return request.get(`${BASE_URL}/shoes`);
    },
    getOne(shoeId) {
        return request.get(`${BASE_URL}/shoes/details/${shoeId}`)
    },
    create(shoeData) {
        console.log(`in service`,shoeData)
        return request.post(`${BASE_URL}/shoes/create`, shoeData)
    },
    edit(shoeData) {
        return request.patch(`${BASE_URL}/shoes/update/${shoeData._id}`, shoeData)
    },
    delete(shoeId) {
        return request.delete(`${BASE_URL}/shoes/delete/${shoeId}`)
    }
}