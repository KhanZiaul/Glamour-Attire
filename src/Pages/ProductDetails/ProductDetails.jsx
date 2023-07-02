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
        <div className="pt-16">
            <h2>Product Details</h2>
            <img src={data?.img} alt="" />
        </div>
    );
};

export default ProductDetails;