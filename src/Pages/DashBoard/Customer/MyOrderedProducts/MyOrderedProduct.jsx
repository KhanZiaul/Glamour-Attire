import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useTitle from "../../../../CustomHook/useTitle/useTitle";
import useScroll from "../../../../CustomHook/useScroll/useScroll";
import { useLocation } from "react-router-dom";


const MyOrderedProduct = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('My Ordered Product | Dashboard')

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
                            <th>Product Brand</th>
                            <th>Product Name</th>
                            <th>Total Pieces</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((orderedProduct, index) => {
                                return (
                                    <tr key={orderedProduct._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={orderedProduct?.img} alt="product image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{orderedProduct.brand}</td>
                                        <td>{orderedProduct.productName}</td>
                                        <td>{orderedProduct.productPiece}</td>
                                        <td>$ {parseFloat(orderedProduct.productPiece * orderedProduct.price)}</td>
                                        <td className="text-green-700 font-semibold">Done</td>
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

export default MyOrderedProduct;