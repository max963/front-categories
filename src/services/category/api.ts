import axios from "axios";

const urlAPI = `${import.meta.env.VITE_API_URL}`;

export const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
        'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE',
    },
    baseURL: urlAPI,
});
