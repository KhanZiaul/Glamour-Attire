import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/img/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FaUser } from 'react-icons/fa';
import useSelectedProducts from "../../../CustomHook/useSelectedProducts/useSelectedProducts";
import useSeller from "../../../CustomHook/useSeller/useSeller";
import useAdmin from "../../../CustomHook/useAdmin/useAdmin";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    function logOutHandler() {
        logOut().then(() => {

        }).catch((error) => {
            console.log(error)
        });
    }
    const [customerSelectedProducts] = useSelectedProducts()
    const [isSeller] = useSeller()
    const [isAdmin] = useAdmin()
    return (
        <div className="fixed z-10 w-full">
            <div className="navbar bg-[#9DB2BF] font-semibold shadow-xl">
                <div className="flex-1">
                    <img className="w-6" src={logo} alt="" />
                    <Link to='/' className="text-xl cursor-pointer">Glamour Attire</Link>
                </div>
                <div className="flex-none">
                    <div className="flex gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            SHOP
                        </NavLink>
                        <NavLink
                            to="/dashboard/welcome"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            DASHBOARD
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            BLOG
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            CONTACT
                        </NavLink>
                    </div>

                    {
                        !isAdmin && !isSeller &&
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{customerSelectedProducts?.length}</span>
                                </div>
                            </label>
                        </div>
                    }
                    <div className="dropdown dropdown-end ms-5">
                        <label tabIndex={0}>

                            {
                                user ?
                                    <div className='flex flex-col md:flex-row items-center gap-3'>
                                        <div className="flex items-center justify-center">
                                            {
                                                user?.photoURL ?
                                                    <img title={user.displayName} src={user.photoURL} className='w-12 h-12 rounded-full cursor-pointer' alt="" />
                                                    :
                                                    <FaUser title={user.displayName} className=' bg-slate-400 w-12 h-12 rounded-full cursor-pointer p-2' />
                                            }
                                        </div>
                                        <button onClick={logOutHandler} className="rounded-md bg-sky-700 text-white font-semibold">Log out</button>
                                    </div>
                                    :
                                    <Link to='/login'><button className="rounded-md bg-sky-700 text-white font-semibold">Login</button></Link>
                            }
                        </label>
                        {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;