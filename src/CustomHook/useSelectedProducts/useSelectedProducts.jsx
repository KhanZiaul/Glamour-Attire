import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useSelectedProducts(){
    const [axiosSecure] = useAxiosSecure()
    const {loading , user} = useContext(AuthContext)
    const {data: customerSelectedProducts , refetch} = useQuery({
        queryKey:['selectedProducts'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/secetedProduct/${user?.email}`)
            return res.data
        }
    })
    return [customerSelectedProducts ,refetch]
}

export default useSelectedProducts;