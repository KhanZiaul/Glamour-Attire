import useNewProducts from "../../../../CustomHook/useNewProducts/useNewProducts";
import { BsFillTrashFill } from 'react-icons/bs'

const MyNewProducts = () => {
    const [newProducts, refetch] = useNewProducts()
    console.log(newProducts)

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
                                            <button className="btn btn-outline btn-success btn-xs" >Update</button>
                                        </td>
                                        <td>
                                            <BsFillTrashFill className="w-6 h-6 cursor-pointer text-[#FF6464]"></BsFillTrashFill>
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