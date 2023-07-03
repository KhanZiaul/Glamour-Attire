import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useSelectedProducts(){

    const [axiosSecure] = useAxiosSecure()
    const {loading} = useContext(AuthContext)
    const {data: selectedProducts , refetch} = useQuery({
        queryKey:['selectedProducts'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get('/selectedProducts')
            return res.data
        }
    })
    return [selectedProducts ,refetch]
}

export default useSelectedProducts;