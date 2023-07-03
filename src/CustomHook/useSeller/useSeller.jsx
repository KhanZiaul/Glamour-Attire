import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


function useSeller() {
    const [axiosSecure] = useAxiosSecure()
    const { user , loading} = useContext(AuthContext)
    const { data: isSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['isSeller'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/seller/${user?.email}`)
            return res.data.seller
        }
    })
    return [isSeller, refetch, isLoading]
}

export default useSeller;