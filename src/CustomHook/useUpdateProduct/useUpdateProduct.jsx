import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useUpdateProduct(){
    const [axiosSecure] = useAxiosSecure()
    const {loading} = useContext(AuthContext)
    const { data : updateProduct = [] , refetch} = useQuery({
        queryKey:['updateProductBySeller'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get('/products')
            return res.data
        }
    })
    
    return [updateProduct,refetch]
}
export default useUpdateProduct;