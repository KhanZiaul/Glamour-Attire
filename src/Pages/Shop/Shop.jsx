import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsCart2 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import bgImage from '../../assets/img/banner/b1.jpg'

const Shop = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(datas => {
                const approvedDatas = datas?.filter(data => data.isApproved === "approved")
                setProducts(approvedDatas)
            })
    }, [])

    return (
        <div className="pt-16 mb-16">
            <div className="hero h-[300px] mb-10" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">#stayhome</h1>
                        <p className="mb-5">Save more with coupons & up to 70% off!</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] gap-8">
                {
                    products?.map(product => {
                        return (
                            <div className="border-2 p-5 space-y-2 rounded-2xl" key={product._id}>
                                <Link to={`/productDetails/${product._id}`}>
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
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Shop;