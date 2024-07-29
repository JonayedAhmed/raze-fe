import axios from 'axios';
import { apiErrorHandler } from '../ApiErrorHandler';


const baseApi = process.env.NEXT_PUBLIC_SERVER_API;

export const addNewSegment = (authToken, formData) => {

    return (
        axios.post(`${baseApi}/segment/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + authToken
            }
        }).then((response) => {
            return [response?.data];
        }).catch(err => {
            return apiErrorHandler(err);
        })
    )
};


export const addNewSubSegment = (authToken, formData) => {

    return (
        axios.post(`${baseApi}/subsegment/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + authToken
            }
        }).then((response) => {
            return [response?.data];
        }).catch(err => {
            return apiErrorHandler(err);
        })
    )
};