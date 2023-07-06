import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSelectedProducts from "../../../../CustomHook/useSelectedProducts/useSelectedProducts";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";

const MySelectedProducts = () => {

    const [axiosSecure] = useAxiosSecure()
    const [customerSelectedProducts, refetch] = useSelectedProducts()
    function deleteProduct(id) {
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
                                'Your product has been deleted.',
                                'success'
                            )
                        }
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
                            <th>Product Image</th>
                            <th>Product brand</th>
                            <th>Product Name</th>
                            <th>Product Numbers</th>
                            <th>Total Price</th>
                            <th>pay</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerSelectedProducts?.map((selectProduct, index) => {
                                return (
                                    <tr key={selectProduct._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selectProduct?.img} alt="product image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{selectProduct?.brand}</td>
                                        <td>{selectProduct?.productName}</td>
                                        <td>{selectProduct?.productPiece}</td>
                                        <td>$ {parseFloat(selectProduct?.price * selectProduct?.productPiece).toFixed(2)}</td>
                                        <td>
                                            <Link to={`/dashboard/payment/${selectProduct._id}`}>
                                                <button className="bg-[#4941eb] hover:bg-[#2c22e6] btn-sm text-white rounded-md">PAY</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteProduct(selectProduct._id)} className="bg-[#e71c6a] hover:bg-[#c70a7b] btn-sm text-white rounded-md">DELETE</button>
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

export default MySelectedProducts;