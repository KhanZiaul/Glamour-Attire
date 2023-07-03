import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


function useSeller() {
    const [axiosSecure] = useAxiosSecure()
    const { user , loading} = useContext(AuthContext)
    const { data: isSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.isSeller
        }
    })
    return [isSeller, refetch, isLoading]
}

export default useSeller;