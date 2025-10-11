import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
});

const useAxiosSecure = () => {
    // Request interceptor to attach token
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Optional: Response interceptor to handle 401/403
    // axiosSecure.interceptors.response.use(
    //     (response) => response,
    //     async (error) => {
    //         const status = error.response?.status;
    //         if (status === 401 || status === 403) {
    //             // handle logout or redirect
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    // Important: return axios instance
    return axiosSecure;
};

export default useAxiosSecure;
