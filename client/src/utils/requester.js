import { getAccessToken } from "./authUtil";

async function request(method, url, data) {

    const options = {}

    const { accessToken } = getAccessToken();

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


    const response = await fetch(url, options);

    if (!response.ok) {
        const error = new Error('An error has occured during fetching!')
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const result = await response.json();
    return result;

};

export default {
    get: request.bind(null, "GET"),
    post: request.bind(null, "POST"),
    put: request.bind(null, "PUT"),
    patch: request.bind(null, "PATCH"),
    delete: request.bind(null, "DELETE"),
}