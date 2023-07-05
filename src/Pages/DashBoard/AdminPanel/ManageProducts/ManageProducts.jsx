import { useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useProducts from "../../../../CustomHook/useProducts/useProducts";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";


const ManageProducts = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const [allProducts, refetch] = useProducts()
    const allNewProducts = allProducts?.filter(product => product?.isNew === "true")
    console.log(allNewProducts)

    function approvedHandler(id) {
        axiosSecure.patch(`/approvedClass/${id}`, { status: 'approved' })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You Approved Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    function denyHandler(id) {
        axiosSecure.patch(`/denyClass/${id}`, { status: 'deny' })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'You Deny It',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>seller name</th>
                            <th>seller email</th>
                            <th>Product Image</th>
                            <th>Product brand</th>
                            <th>product name</th>
                            <th>Price</th>
                            <th>is approved ?</th>
                            <th>Feedbacks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allNewProducts?.map((newProduct, index) => {
                                return (
                                    <tr key={newProduct._id}>
                                        <th>{index + 1}</th>
                                        <td>{newProduct?.sellerName}</td>
                                        <td>{newProduct?.sellerEmail}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12 cursor-pointer">
                                                    <Link to={`/productDetails/${newProduct._id}`}>
                                                        <img src={newProduct?.img} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{newProduct?.brand}</td>
                                        <td>{newProduct?.productName}</td>
                                        <td>${newProduct?.price}</td>
                                        <td className="font-bold">{newProduct?.isApproved}</td>
                                        <div className='flex flex-col gap-3'>
                                            <button onClick={() => approvedHandler(newProduct._id)} className="btn btn-outline btn-success btn-xs mt-3" disabled={newProduct?.isApproved === "approved" || newProduct?.isApproved === "deny"}>Approve</button>
                                            <button onClick={() => denyHandler(newProduct._id)} className="btn btn-outline btn-error btn-xs" disabled={newProduct?.isApproved === "approved" || newProduct?.isApproved === "deny"}>Deny</button>

                                            <Link to={`/dashboard/feedback/${newProduct._id}`}> <button className="btn btn-outline btn-info btn-xs mb-3 w-full">Feedback</button></Link>

                                        </div>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default ManageProducts;