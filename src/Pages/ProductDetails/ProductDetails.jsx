import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams()
    console.log(id)

    const { data } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:3000/product/${id}`)
            return data.json()
        }
    })

    console.log(data)

    return (
        <div className="pt-24 flex items-center gap-10 mb-10 w-[95%] mx-auto">
            <div>
                <img className="rounded-xl" src={data?.img} alt="" />
            </div>
            <div className="space-y-4">
                <p>Home/{data?.brand}</p>
                <p>{data?.productName}</p>
                <p>${data?.price}</p>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Normal</option>
                    <option>Normal Apple</option>
                    <option>Normal Orange</option>
                    <option>Normal Tomato</option>
                </select>
                <div className="flex">
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Normal</option>
                        <option>Normal Apple</option>
                        <option>Normal Orange</option>
                        <option>Normal Tomato</option>
                    </select>
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
                <p>Product Details</p>
                <p>{data?.productDetails}</p>
            </div>
        </div>
    );
};

export default ProductDetails;