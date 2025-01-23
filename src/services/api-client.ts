import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {   
        key: '5156c7f5885a400ea1d4068e9b8c03a3',
    },
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig = {}) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then((response) => response.data);
    }
}

export default ApiClient;