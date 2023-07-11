import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
import useProducts from "../../../../CustomHook/useProducts/useProducts";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import useTitle from "../../../../CustomHook/useTitle/useTitle";
import useScroll from "../../../../CustomHook/useScroll/useScroll";


const ManageProducts = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('Manage Products | Dashboard')
    const [axiosSecure] = useAxiosSecure()
    const [allProducts, refetch] = useProducts()
    console.log(allProducts)
    const allNewProducts = allProducts?.filter(product => product?.isNew === "true")
    console.log(allNewProducts)

    function approvedHandler(id) {
        axiosSecure.patch(`/approvedProduct/${id}`, { isApproved: 'approved' })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'you approved new product successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    function denyHandler(id) {
        axiosSecure.patch(`/denyProduct/${id}`, { isApproved: 'deny' })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'you deny new product',
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
                        <tr className="uppercase bg-[#1B6B93] text-white">
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

                                            <Link to={`/dashboard/feedback/${newProduct._id}`}> <button disabled={newProduct?.fb === "true"} className="btn btn-outline btn-info btn-xs mb-3 w-full">Feedback</button></Link>

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