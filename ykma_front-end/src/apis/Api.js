import axios from 'axios';
const DOMAIN = 'http://localhost:8080';

export const request = async (method, url, data) => {
    try {
        const token = window.localStorage.getItem('accessToken')

        const response = await axios({
            method: method,
            url: `${DOMAIN}${url}`,
            data: data,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('API request Error', error);
        throw error;
    }
}