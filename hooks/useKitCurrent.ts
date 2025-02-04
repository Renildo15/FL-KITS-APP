import { api } from "@/services/api";
import axios from "axios";

export async function useKitCurrent(id: string) {
    interface IResponse {
        message: string;
    }

    try {
        const res = await api.patch<IResponse>(`/api/kit/current/${id}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.debug('Axios error message:', error.message);
            if (error.response) {
                console.debug('Response data:', error.response.data);
                console.debug('Response status:', error.response.status);
                console.debug('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}