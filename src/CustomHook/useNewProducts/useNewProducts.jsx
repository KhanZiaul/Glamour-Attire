import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useNewProducts(){
    const [axiosSecure] = useAxiosSecure()
    const {user,loading} = useContext(AuthContext)
    const {data: newProducts , refetch} = useQuery({
        queryKey:['newProducts'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/newProducts/${user?.email}`)
            return res.data
        }
    })
    return [newProducts ,refetch]
}

export default useNewProducts;