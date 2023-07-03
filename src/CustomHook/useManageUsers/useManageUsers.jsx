import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useManageUsers(){

    const [axiosSecure] = useAxiosSecure()
    const {loading} = useContext(AuthContext)
    const {data: manageUsers , refetch} = useQuery({
        queryKey:['manageUsers'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get('/manageUsers')
            return res.data
        }
    })
    return [manageUsers ,refetch]
}

export default useManageUsers;