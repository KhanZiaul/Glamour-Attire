import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useAddedProducts(){
    const [axiosSecure] = useAxiosSecure()
    const {loading} = useContext(AuthContext)
    const { data : addedProducts = [] , refetch} = useQuery({
        queryKey:['addedProducts'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get('/addedProducts')
            return res.data
        }
    })
    
    return [addedProducts,refetch]
}
export default useAddedProducts;