import useAxiosSecure from './useAxiosSecure'
import UseContext from './useContext'
import { useQuery } from '@tanstack/react-query'

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = UseContext()

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email, // only fetch if user exists
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            return res.data?.admin
        }
    })

    return [isAdmin || false, isAdminLoading || false]
}

export default useAdmin
