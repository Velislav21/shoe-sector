export default async function request(method, url, data) {

    let options = {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    if (data) {
        options = {
            ...options,
            method
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result;

    } catch (error) {
        console.log(error);
        return error.message
    }

}
