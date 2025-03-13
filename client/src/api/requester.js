
import { getAccessToken } from "../utils/authUtil";

async function request(method, url, data) {

    const options = {}
    
    const accessToken = getAccessToken();
    if (accessToken) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${accessToken}`,
        }
    }


    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data)
    }


    try {
        console.log(options)
        const response = await fetch(url, options);
        const result = await response.json();

        return result;

    } catch (error) {
        console.log(error);
    }
};

export default {
    get: request.bind(null, "GET"),
    post: request.bind(null, "POST"),
    put: request.bind(null, "PUT"),
    patch: request.bind(null, "PATCH"),
    delete: request.bind(null, "DELETE"),
}