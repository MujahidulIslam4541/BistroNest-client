
import useAxiosSecure from './useAxiosSecure'
import UseContext from './useContext'
import { useQuery } from '@tanstack/react-query'

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = UseContext()
    const { data: isAdmin ,isPending:isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin,isAdminLoading]
}

export default useAdmin
