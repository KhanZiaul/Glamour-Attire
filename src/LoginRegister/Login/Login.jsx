import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero pt-24 pb-8 bg-base-200">
            <div className="flex-col w-2/4">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-center mb-4 font-bold">LOGIN</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Enter your password" className="input input-bordered" />
                            <label className="label mt-3">
                                <a href="#" className="label-text-alt link link-hover text-blue-700">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p className="label-text-alt">New to Glamour Attire? <span className="link link-hover text-blue-700"><Link to='/register'>Register Now</Link></span></p>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;