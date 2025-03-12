import { BASE_URL } from "../constants/constants";
import request from "../api/requester";

export default {
    getAll() {
        return request.get(`${BASE_URL}/shoes`);
    },
    getOne(shoeId) {
        return request.get(`${BASE_URL}/shoes/details/${shoeId}`)
    },
    create(shoeData, token) {
        return request.post(`${BASE_URL}/shoes/create`, shoeData, token)
    }
}