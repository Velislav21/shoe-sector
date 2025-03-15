export const getAccessToken = () => {
    const user = localStorage.getItem('user');

    if(!user) {
        return '';
    }
    const userData = JSON.parse(user);
    return userData;
}