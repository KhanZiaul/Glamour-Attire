import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState()
    useEffect(() => {
        fetch('http://localhost:3000/products/features')
            .then(res => res.json())
            .then(datas => {
                setFeaturedProducts(datas)
            })
    }, [])
    return (
        <div>
            <div className="text-center space-y-3">
                <h2 className="text-6xl font-semibold">Featured Products</h2>
                <p className="text-xl">Summer Collection New Morden Design</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] my-8 gap-8">
                {
                    featuredProducts?.map(featuredProduct => {
                        return (
                            <div className="border-2 p-4 rounded-2xl" key={featuredProduct._id}>
                                <img className="w-full lg:h-80 mx-auto rounded-2xl" src={featuredProduct.img} alt="" />
                                <p className="font-semibold text-gray-600">{featuredProduct.brand}</p>
                                <p className="font-bold">{featuredProduct.productName}</p>
                                <Rating
                                    style={{ maxWidth:80 }}
                                    value={featuredProduct.ratings}
                                    readOnly
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;