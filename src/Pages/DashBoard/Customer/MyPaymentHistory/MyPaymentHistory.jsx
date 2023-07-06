import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";


const MyPaymentHistory = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user , loading} = useContext(AuthContext)

    const {data:paymentDoneProduct} = useQuery({
        queryKey:['paymentDoneProduct'],
        enabled:!loading,
        queryFn:async()=>{
            const res = axiosSecure.get(`/paymentDoneProduct/${user?.email}`)
            return res.data
        }
    })

    console.log(paymentDoneProduct)

    return (
        <>
        </>
        // <div>
        //     <div className="overflow-x-auto">
        //         <table className="table bg-white">
        //             {/* head */}
        //             <thead>
        //                 <tr className="uppercase">
        //                     <th>#</th>
        //                     <th>Email</th>
        //                     <th>language</th>
        //                     <th>TransactionId</th>
        //                     <th>Date</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     enrollClasses?.map((paymentsHistory, index) => {
        //                         return (
        //                             <tr key={paymentsHistory._id}>
        //                                 <th>{index + 1}</th>
        //                                 <td>
        //                                     {paymentsHistory.email}
        //                                 </td>
        //                                 <td>{paymentsHistory.name}</td>
        //                                 <td>{paymentsHistory.TransactionId}</td>
        //                                 <td className="font-bold">{paymentsHistory.date}</td>
        //                             </tr>
        //                         )
        //                     })
        //                 }
        //             </tbody>
        //         </table>
        //     </div>

        // </div>
    );
};

export default MyPaymentHistory;