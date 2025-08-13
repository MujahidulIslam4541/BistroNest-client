import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const useMenu = () => {
    const axiosPublic = useAxiosOpen();

    const { data: menu = [], isPending: loading ,refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })
    return [menu, loading,refetch]
}

export default useMenu;