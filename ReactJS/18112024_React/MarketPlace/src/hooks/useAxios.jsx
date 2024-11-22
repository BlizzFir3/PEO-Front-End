import axios from 'axios';
import { useState } from 'react';

const url = 'http://localhost:3001/products';

const api = axios.create({
    baseURL: url,
});

api.interceptors.request.use(
    (config) =>
        new Promise((resolve) => setTimeout(() => resolve(config), 1200))
);

export const useAxios = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(8);

    const handleRequest = async (requestFunction, ...args) => {
        setLoading(true);
        try {
            const response = await requestFunction(...args);
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            throw error;
        }
    };

    const get = (endpoint) => handleRequest(api.get, endpoint);
    const post = (endpoint, data) => handleRequest(api.post, endpoint, data);
    const put = (endpoint, id, data) =>
        handleRequest(api.put, `${endpoint}/${id}`, data);

    const remove = (endpoint, id) =>
        handleRequest(api.delete, `${endpoint}/${id}`);

    const getPaginate = () =>
        handleRequest(api.get, `?_page=${page}&_per_page=${perPage}`);

    const getById = (id) => handleRequest(api.get, `/${id}`)

    return {
        get,
        post,
        put,
        remove,
        loading,
        error,
        getPaginate,
        setPage,
        setPerPage,
        page,
        perPage,
        getById,
    };
};
