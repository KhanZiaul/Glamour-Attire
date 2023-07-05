import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import useProducts from "../../../../CustomHook/useProducts/useProducts";

const img_key = import.meta.env.VITE_IMAG_KEY

const UpdateProduct = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { id } = useParams()
    const [allProducts] = useProducts()
    const matchProduct = allProducts?.filter(product => product._id === id)

    function formHandler(event) {

        event.preventDefault()

        const sellerName = event.target.sellerName.value;
        const sellerEmail = event.target.sellerEmail.value;
        const brand = event.target.brand.value;
        const ratings = event.target.ratings.value;
        const price = event.target.price.value;
        const img = event.target.img.files[0]
        const type = event.target.type.value;
        const productName = event.target.productName.value;
        const productDetails = event.target.productDetails.value;
        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=${img_key}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    const image = data.data.display_url
                    const updateProduct = {
                        sellerName,
                        sellerEmail,
                        brand,
                        ratings,
                        price,
                        img: image,
                        type,
                        productName,
                        productDetails
                    }

                    axiosSecure.patch(`/updateProduct/${id}`, updateProduct)
                        .then(data => {
                            console.log(data.data)
                            if (data.data.modifiedCount > 0) {
                                Swal.fire(
                                    'Successfull!',
                                    'You updated product successfully',
                                    'success'
                                )
                            }
                        })

                    console.log(updateProduct)
                }
            })

        event.target.reset()
    }

    return (
        <div className=''>
            <div className=" flex-col lg:flex-row-reverse">

                <form onSubmit={formHandler} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">


                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input value={user?.displayName ? user?.displayName : ''} name='sellerName' type="text" placeholder="Seller Name" className="input input-bordered" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input value={user?.email} name='sellerEmail' type="email" placeholder="Seller Email" className="input input-bordered" required readOnly />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <input defaultValue={matchProduct[0]?.brand} name='brand' type="text" placeholder="Brand Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input defaultValue={matchProduct[0]?.ratings} name='ratings' type="text" placeholder="Ratings" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input defaultValue={matchProduct[0]?.price} name='price' type="text" placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input name='img' type="file" className="input input-bordered" required />
                            </div>

                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type New / Featured</span>
                                </label>
                                <select defaultValue={matchProduct[0]?.type} name="type" className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Product Type</option>
                                    <option>n</option>
                                    <option>f</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input defaultValue={matchProduct[0]?.productName} name='productName' type="text" placeholder="Product Name" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className='grid grid-cols-1 mt-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Details</span>
                                </label>
                                <textarea defaultValue={matchProduct[0]?.productDetails} name='productDetails' placeholder="Product Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className='btn btn-error text-white'>Update Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;