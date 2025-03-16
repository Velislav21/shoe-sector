import { BASE_URL } from "../constants/constants";
import request from "../api/requester";


export default {
    login(data) {
        return request.post(`${BASE_URL}/users/login`, data)
    },
    register(data) {
        return request.post(`${BASE_URL}/users/register`, data)
    },
    logout() {
        localStorage.removeItem("user")
    },
    deleteProfile(userId) {
        return request.delete(`${BASE_URL}/users/profile/${userId}`);
    },
    getProfile(userId) {
        return request.get(`${BASE_URL}/users/profile/${userId}`);
    }
}