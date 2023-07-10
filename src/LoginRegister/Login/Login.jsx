import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import axios from "axios";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Login = () => {

    const { signinUser, signInPopup } = useContext(AuthContext)
    const [color, setColor] = useState(true)
    const [loginMessage, setLoginMessage] = useState('')
    const [captcha, setCaptcha] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const githubProvider = new GithubAuthProvider();
    const {
        register, reset, handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        signinUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setLoginMessage('Successfully Login')
                setColor(true)
                navigate(from, { replace: true })
                reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });
    }

    function googleHandler() {
        signInPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                if (user && user?.email) {
                    axios.post(`http://localhost:3000/user/${user?.email}`, { name: user.displayName, email: user?.email, image: user.photoURL, role: "customer" })
                        .then(data => {
                            console.log(data.data)
                        })
                }
                setLoginMessage('Successfully Login')
                setColor(true)
            }).catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });
    }

    function githubHandler() {
        signInPopup(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                if (user && user?.email) {
                    axios.post(`http://localhost:3000/user/${user?.email}`, { name: user.displayName, email: user?.email, image: user.photoURL, role: "customer" })
                        .then(data => {
                            console.log(data.data)
                        })
                }
                setLoginMessage('Successfully Login')
                setColor(true)
            }).catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });
    }

    // Captcha

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    function captchaHandler(event) {

        const user_captcha_value = event.target.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setCaptcha(false)
        }

        else {
            setCaptcha(true)
        }
    }

    return (
        <div className="hero pt-24 pb-8 bg-base-200">
            <div className="flex-col w-2/4">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-center mb-4 font-bold">LOGIN</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                            <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered" />

                            <div className="flex items-center mt-4 mb-2">
                                < LoadCanvasTemplate />
                            </div>
                            <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                                <input onBlur={captchaHandler} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your capta" name='captcha' aria-label="Full name" required />
                            </div>

                            <p className={`text-center my-3 font-bold  ${color ? 'text-green-500' : 'text-red-500'}`}>{loginMessage}</p>

                            <label className="label my-4">
                                <p className="label-text-alt">New to Glamour Attire? <span className="link link-hover text-blue-700"><Link to='/register'>Register Now</Link></span></p>
                            </label>
                        </div>

                        <div className="form-control">
                            <button disabled={captcha} className="btn btn-primary text-white">LOGIN</button>
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

export default Login;