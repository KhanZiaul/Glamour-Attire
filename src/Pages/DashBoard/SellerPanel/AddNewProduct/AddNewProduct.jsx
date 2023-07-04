import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";


const AddNewProduct = () => {
    const { user } = useContext(AuthContext)

    function formHandler(event) {

        event.preventDefault()

        const productImage = event.target.img.files[0]
        const sellerName = event.target.instructorName.value;
        const email = event.target.instructorEmail.value;
        const name = event.target.classname.value;
        const price = event.target.price.value;
        const available = event.target.availableSeats.value;

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
                                <input name='brand' type="text" placeholder="Brand Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input name='ratings' type="text" placeholder="Ratings" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' type="text" placeholder="Price" className="input input-bordered" required />
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
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Product Type</option>
                                    <option>n</option>
                                    <option>f</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input name='classname' type="text" placeholder="Product Name" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className='grid grid-cols-1 mt-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Details</span>
                                </label>
                                <textarea name='classname' placeholder="Product Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className='btn btn-error text-white'>Add New Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;