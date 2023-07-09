import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsCart2 } from 'react-icons/bs';
import { Link } from "react-router-dom";

const NewArrivals = () => {
    const [newProducts, setnewProducts] = useState()
    useEffect(() => {
        fetch('http://localhost:3000/products/new')
            .then(res => res.json())
            .then(datas => {
                const approvedDatas = datas?.filter(data => data.isApproved === "approved")
                setnewProducts(approvedDatas)
            })
    }, [])
    return (
        <div className="my-16">
            <div className="text-center space-y-3 mb-10">
                <h2 className="text-6xl font-semibold">New Arrivals</h2>
                <p className="text-xl">Summer Collection New Morden Design</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] my-8 gap-8">
                {
                    newProducts?.slice(0, 6).map(newProduct => {
                        return (
                            <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="border-2 p-5 space-y-2 rounded-2xl" key={newProduct._id}>
                                <Link to={`/productDetails/${newProduct._id}`}>
                                    <img className="w-full lg:h-80 mx-auto rounded-2xl" src={newProduct.img} alt="" />
                                    <p className="font-semibold text-gray-600">{newProduct.brand}</p>
                                    <p className="font-bold">{newProduct.productName}</p>
                                    <Rating
                                        style={{ maxWidth: 80 }}
                                        value={newProduct.ratings}
                                        readOnly
                                    />
                                    <div className="flex justify-between">
                                        <p className="text-xl font-bold text-[#1B6B93]">${newProduct.price}</p>
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

export default NewArrivals;