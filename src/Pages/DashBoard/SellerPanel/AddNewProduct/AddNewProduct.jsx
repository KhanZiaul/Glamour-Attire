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
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input name='img' type="file" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input value={user?.displayName ? user?.displayName : ''} name='instructorName' type="text" placeholder="Instructor name" className="input input-bordered" required readOnly />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input value={user?.email} name='instructorEmail' type="email" placeholder="Instructor email" className="input input-bordered" required readOnly/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input name='classname' type="text" placeholder="Class name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available</span>
                                </label>
                                <input name='availableSeats' type="text" placeholder="Available seats" className="input input-bordered" required />
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