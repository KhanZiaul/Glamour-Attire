import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/img/logo.png'

const Navbar = () => {
    return (
        <div className="fixed z-10 w-full">
            <div className="navbar bg-[#9DB2BF] font-semibold shadow-xl">
                <div className="flex-1">
                    <img className="w-6" src={logo} alt="" />
                    <a className="text-xl">Glamour Attire</a>
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
                            to="/messages"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            BLOG
                        </NavLink>
                        <NavLink
                            to="/messages"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            to="/messages"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            CONTACT
                        </NavLink>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                    </div>
                    <div className="dropdown dropdown-end ms-5">
                        <label tabIndex={0}>
                            {/* <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div> */}
                            <div >
                                <Link to='/login'><button className="px-5 py-2 rounded-md bg-sky-700 text-white font-semibold">Login</button></Link>
                            </div>
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