import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import axios from "axios";

const Register = () => {

    const { createUser, logOut } = useContext(AuthContext)
    const [color, setColor] = useState(true)
    const navigate = useNavigate()
    const [registerMessage, setRegisterMessage] = useState('')
    const [isCheck, setIsCheck] = useState(false)
    const {
        register, formState: { errors }, reset, handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                if (user && user?.email) {
                    axios.post(`http://localhost:3000/user/${user?.email}`, { name: data.name, email: data.email, image: data.URL, role: "customer" })
                        .then(data => {
                            console.log(data.data)
                        })
                }
                updateProfile(userCredential.user, {
                    displayName: data.name, photoURL: data.URL
                }).then(() => {

                }).catch((error) => {
                    const errorMessage = error.message;
                    setRegisterMessage(errorMessage)
                    setColor(false)
                });
                setRegisterMessage('Successfully Register')
                setColor(true)
                reset()
                logOut().then(() => {
                }).catch((error) => {
                });
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage)
                setColor(false)
            });
    }

    function checkboxHandler(event) {

        setIsCheck(event.target.checked)
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
                            <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).+$/, })} placeholder="Enter your password" className="input input-bordered" />

                            {errors.password?.type === 'maxLength' && <p role="alert" className='text-red-500 font-bold my-2'>password should not be more than 20 characters</p>}

                            {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500 font-bold my-2'>password should be at least 6 characters</p>}

                            {errors.password?.type === 'pattern' && <p role="alert" className='text-red-500 font-bold my-2'>password should be at least one number, one special character and one uppercase</p>}
                        </div>

                        <p className={`text-center my-3 font-bold  ${color ? 'text-green-500' : 'text-red-500'}`}>{registerMessage}</p>

                        <div className='flex items-center gap-3'>
                            <input onClick={checkboxHandler} type="checkbox" className="checkbox checkbox-primary bg-slate-200 mt-4" />
                            <span>Accept <Link className=' text-blue-600 underline' to='/termsCondition'>Terms and Conditions</Link> </span>
                        </div>

                        <label className="label mt-4">
                            <p className="label-text-alt">Already have an account? <span className="link link-hover text-blue-700"><Link to='/login'>Login Now</Link></span></p>
                        </label>

                        <div className="form-control mt-6">
                            <button disabled={!isCheck} className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;