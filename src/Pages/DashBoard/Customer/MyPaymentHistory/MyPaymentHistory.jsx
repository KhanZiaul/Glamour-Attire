import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useTitle from "../../../../CustomHook/useTitle/useTitle";
import useScroll from "../../../../CustomHook/useScroll/useScroll";
import { useLocation } from "react-router-dom";


const MyPaymentHistory = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('My Payment History | Dashboard')

    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)

    const { data } = useQuery({
        queryKey: ['donePayment'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentDoneProduct/${user?.email}`)
            return res.data
        }
    })

    console.log(data)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#1B6B93] text-white">
                            <th>#</th>
                            <th>Email</th>
                            <th>Total Pieces</th>
                            <th>Total Amount</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((paymentsHistory, index) => {
                                return (
                                    <tr key={paymentsHistory._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            {paymentsHistory.email}
                                        </td>
                                        <td>{paymentsHistory.productPiece}</td>
                                        <td>$ {parseFloat(paymentsHistory.productPiece * paymentsHistory.price)}</td>
                                        <td>{paymentsHistory.TransactionId}</td>
                                        <td>{paymentsHistory.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPaymentHistory;