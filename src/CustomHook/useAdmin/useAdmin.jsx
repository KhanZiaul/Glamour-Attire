import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useAdmin() {
    const [axiosSecure] = useAxiosSecure()
    const { user , loading} = useContext(AuthContext)
    const { data: isAdmin = [], isLoading, refetch } = useQuery({
        queryKey: ['isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, refetch, isLoading]
}
export default useAdmin;