import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsCart2 } from 'react-icons/bs';

const Shop = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(datas => {
                setProducts(datas)
            })
    }, [])
    return (
        <div className="pt-28 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] gap-8">
                {
                    products?.map(product => {
                        return (
                            <div className="border-2 p-5 space-y-2 rounded-2xl" key={product._id}>
                                <img className="w-full lg:h-80 mx-auto rounded-2xl" src={product.img} alt="" />
                                <p className="font-semibold text-gray-600">{product.brand}</p>
                                <p className="font-bold">{product.productName}</p>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={product.ratings}
                                    readOnly
                                />
                                <div className="flex justify-between">
                                    <p className="text-xl font-bold text-[#1B6B93]">${product.price}</p>
                                    <BsCart2 className="text-[#1B6B93] bg-gray-200 rounded-full p-2 w-9 h-9 cursor-pointer"></BsCart2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Shop;