import Swal from "sweetalert2";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import useNewProducts from "../../../../CustomHook/useNewProducts/useNewProducts";
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, useLocation } from "react-router-dom";
import useTitle from "../../../../CustomHook/useTitle/useTitle";
import useScroll from "../../../../CustomHook/useScroll/useScroll";

const MyNewProducts = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('My New Product | Dashboard')
    const [axiosSecure] = useAxiosSecure()
    const [newProducts, refetch] = useNewProducts()
    function removeProduct(id) {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteProduct/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                        refetch()
                        console.log(data.data)
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
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>is Approved ?</th>
                            <th>Feedback</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newProducts?.map((myProduct, index) => {
                                return (
                                    <tr key={myProduct._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myProduct.img} alt="product image" />
                                                </div>
                                            </div></td>
                                        <td>{myProduct.brand}</td>
                                        <td>{myProduct.productName}</td>
                                        <td>${myProduct.price}</td>
                                        <td className="font-bold">{myProduct.isApproved}</td>
                                        <td className="font-semibold">{myProduct.feedback ? myProduct.feedback : 'No Feedback'}
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/updateProduct/${myProduct._id}`}><button className="btn btn-outline btn-success btn-xs" >Update</button></Link>
                                        </td>
                                        <td>
                                            <BsFillTrashFill onClick={() => removeProduct(myProduct._id)} className="w-6 h-6 cursor-pointer text-[#FF6464]"></BsFillTrashFill>
                                        </td>
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

export default MyNewProducts;