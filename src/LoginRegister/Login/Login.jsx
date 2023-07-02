import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

    const { signinUser, signInPopup, passwordReset } = useContext(AuthContext)
    const reference = useRef()
    const [color, setColor] = useState(true)
    const [loginMessage, setLoginMessage] = useState('')
    const googleProvider = new GoogleAuthProvider();
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
                setLoginMessage('Successfully Login')
                setColor(true)
            }).catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });
    }

    function passwordResetHandler() {
        const Email = reference.current?.value;
        if (!Email) {
            return alert('please provide email')
        }
        passwordReset(Email)
            .then(() => {
                alert('password reset email send')
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
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
                            <input ref={reference} {...register("email", { required: true })} type="email" placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered" />

                            <label className="label my-3">
                                <button onClick={passwordResetHandler} className="label-text-alt link link-hover text-blue-700">Forgot password?</button>
                            </label>

                            <label className="label">
                                <p className="label-text-alt">New to Glamour Attire? <span className="link link-hover text-blue-700"><Link to='/register'>Register Now</Link></span></p>
                            </label>

                        </div>

                        <p className={`text-center my-3 font-bold  ${color ? 'text-green-500' : 'text-red-500'}`}>{loginMessage}</p>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">LOGIN</button>
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