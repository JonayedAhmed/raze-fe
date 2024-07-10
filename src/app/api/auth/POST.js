import axios from 'axios';
import { apiErrorHandler } from '../ApiErrorHandler';

const baseApi = process.env.NEXT_PUBLIC_SERVER_API;

export const registerUser = (requestBody) => {

    return (
        axios.post(`${baseApi}/account/register`, requestBody, {
            timeout: 3000
        }).then((response) => {
            return [response?.data];
        }).catch(err => {
            return apiErrorHandler(err);
        })
    )
};
