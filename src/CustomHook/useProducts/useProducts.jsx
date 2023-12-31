import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useProducts(){
    const [axiosSecure] = useAxiosSecure()
    const {loading} = useContext(AuthContext)
    const { data : allProducts = [] , refetch} = useQuery({
        queryKey:['allProductsCollections'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get('/allProductCollections')
            return res.data
        }
    })
    
    return [allProducts,refetch]
}
export default useProducts;