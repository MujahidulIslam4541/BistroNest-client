import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-nest-server.vercel.app'
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



// import axios from "axios";
// import { useEffect } from "react";

// const axiosSecure = axios.create({
//     baseURL: "http://localhost:3000",
// });

// const useAxiosSecure = () => {
//     useEffect(() => {
//         // Request interceptor to attach token
//         const requestInterceptor = axiosSecure.interceptors.request.use(
//             (config) => {
//                 const token = localStorage.getItem("access_token");
//                 if (token) {
//                     config.headers.Authorization = `Bearer ${token}`;
//                 }
//                 return config;
//             },
//             (error) => Promise.reject(error)
//         );

//         return () => {
//             axiosSecure.interceptors.request.eject(requestInterceptor);
//         };
//     }, []);

//     return axiosSecure;
// };

// export default useAxiosSecure;

