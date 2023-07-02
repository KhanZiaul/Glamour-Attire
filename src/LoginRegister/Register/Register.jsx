import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {

    const { createUser, signInPopup } = useContext(AuthContext)
    const [color, setColor] = useState(true)
    const [registerMessage, setRegisterMessage] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const {
        register, formState: { errors }, reset, handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
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
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage)
                setColor(false)
            });
    }

    function googleHandler() {
        signInPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setRegisterMessage('Successfully Register')
                setColor(true)
            }).catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage)
                setColor(false)
            });
    }

    function githubHandler() {
        signInPopup(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setRegisterMessage('Successfully Register')
                setColor(true)
            }).catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage)
                setColor(false)
            });
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

                            <label className="label mt-4">
                                <p className="label-text-alt">Already have an account? <span className="link link-hover text-blue-700"><Link to='/login'>Login Now</Link></span></p>
                            </label>

                        </div>

                        <p className={`text-center my-3 font-bold  ${color ? 'text-green-500' : 'text-red-500'}`}>{registerMessage}</p>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Register</button>
                        </div>
                    </form>
                    <div className="flex justify-center gap-10 mb-8">

                        <div className='flex flex-col md:flex-row gap-5 justify-around shadow-2xl'>
                            <div className='inline-block'>
                                <div onClick={googleHandler} className='cursor-pointer flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-blue-800 hover:text-white'>
                                    <FaGoogle></FaGoogle>
                                    <span>Google Sign-in</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 justify-around shadow-2xl'>
                            <div className='inline-block'>
                                <div onClick={githubHandler} className='cursor-pointer flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-blue-800 hover:text-white '>
                                    <FaGithub></FaGithub>
                                    <span>Github Sign-in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;