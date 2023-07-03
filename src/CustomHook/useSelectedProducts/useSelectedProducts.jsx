import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

function useSelectedProducts(){

    const [axiosSecure] = useAxiosSecure()

    const {data: selectedProducts , refetch} = useQuery({
        queryKey:['selectedProducts'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/selectedProducts')
            return res.data
        }
    })
    return [selectedProducts ,refetch]
}

export default useSelectedProducts;