import { BASE_URL } from "../constants/constants";
import request from "../api/requester";

export default {
    login(data) {
        return request("POST", `${BASE_URL}/users/login`, data)
    }
}