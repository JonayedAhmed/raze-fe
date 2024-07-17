import { apiErrorHandler } from '@/app/api/ApiErrorHandler';
import axios from 'axios';


const baseApi = process.env.NEXT_PUBLIC_SERVER_API;

export const getAllUsers = (authToken) => {
    return (
        axios.get(`${baseApi}/account/users/all`, {
            timeout: 3000,
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        }).then((response) => {
            return [response?.data];
        }).catch(err => {
            return apiErrorHandler(err);
        })
    )
};

