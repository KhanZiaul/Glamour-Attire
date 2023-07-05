import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../CustomHook/useAxiosSecure/useAxiosSecure";

const ProductDetails = () => {
    const { id } = useParams()
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:3000/product/${id}`)
            return data.json()
        }
    })

    function formHandler(e) {
        e.preventDefault()
        const size = e.target.size.value;
        const productPiece = e.target.productPiece.value;
        const selectedProduct = {
            userName : user?.displayName,
            email : user?.email,
            productId : data?._id,
            brand : data?.brand,
            size : size,
            productPiece : parseInt(productPiece),
            ratings : data?.ratings,
            price : data?.price,
            img : data?.img,
            type : data?.type,
            productName : data?.productName,
            productDetails : data?.productDetails,
            isApproved : data?.isApproved,
            payment : "false"
        }
        console.log(selectedProduct)
        axiosSecure.post('/secetedProduct',selectedProduct)
        .then(data => {
            console.log(data.data)
        })

    }

    return (
        <div className="pt-24 flex flex-col lg:flex-row items-center gap-10 mb-10 w-[95%] mx-auto">
            <div>
                <img className="rounded-xl w-full lg:w-[1000px] lg:h-[400px]" src={data?.img} alt="" />
            </div>
            <div className="space-y-4">
                <p className="font-bold">Home / {data?.brand}</p>
                <p className="text-xl font-bold">{data?.productName}</p>
                <p className="text-3xl font-bold">${data?.price}</p>
                <form className="space-y-4" onSubmit={formHandler}>
                    <select name="size" className="select w-full max-w-xs border-sky-700">
                        <option disabled selected>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <input className="border-2 rounded-md w-20 max-w-xs p-2 border-sky-700" defaultValue={1} min='1' type="number" name="productPiece" id="" />
                        <button className="px-5 py-2 rounded-md bg-sky-700 text-white font-semibold count">Add To Cart</button>
                    </div>
                </form>
                <p className="text-xl font-bold">Product Details</p>
                <p className="text-justify">{data?.productDetails}</p>
            </div>
        </div>
    );
};

export default ProductDetails;