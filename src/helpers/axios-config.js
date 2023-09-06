import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://inventarios-2023-15718.web.app/'
});
