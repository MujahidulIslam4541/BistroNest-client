import axios from 'axios'
// import UseContext from './useContext'
// import { useNavigate } from 'react-router-dom'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})
const useAxiosSecure = () => {
    // const { logOut } = UseContext()
    // const navigation = useNavigate()

    // 
    axiosSecure.interceptors.request.use(function (config) {
        const token =  localStorage.getItem('access_token')
        // console.log('axios interceptors', token)
         config.headers.authorization = `Bearer ${token}`
        return  config;
    },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        },)


    // Interceptors 401 and 403 status
    // axiosSecure.interceptors.response.use((config) => {
    //     return config;
    // },
    //     async (error) => {
    //         const status = error.response?.status;
    //         console.log("status in the interceptors", status)
    //         if (status === 401 || status == 403) {
    //             await logOut();
    //             navigation('/signIn')
    //         }
    //         return Promise.reject(error)
    //     }
    // )
    return axiosSecure;
}

export default useAxiosSecure
