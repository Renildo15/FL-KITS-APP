import axios from "axios";

export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data)