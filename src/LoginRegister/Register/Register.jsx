import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register, formState: { errors } , reset ,handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="hero pt-24 pb-8 bg-base-200">
            <div className="flex-col w-2/4">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-center mb-4 font-bold">REGISTER</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("URL", { required: true })} type="url" placeholder="Enter your Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, maxLength: 20 , minLength:6, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).+$/, })} placeholder="Enter your password" className="input input-bordered" />

                            {errors.password?.type ==='maxLength' && <p role="alert" className='text-red-500 font-bold my-2'>password should not be more than 20 characters</p>}

                            {errors.password?.type ==='minLength' && <p role="alert" className='text-red-500 font-bold my-2'>password should be at least 6 characters</p>}

                            {errors.password?.type ==='pattern' && <p role="alert" className='text-red-500 font-bold my-2'>password should be at least one number, one special character and one uppercase</p>}

                            <label className="label mt-4">
                                <p className="label-text-alt">Already have an account? <span className="link link-hover text-blue-700"><Link to='/login'>Login Now</Link></span></p>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;