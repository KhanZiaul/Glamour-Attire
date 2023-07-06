import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { MdPostAdd, MdPayment } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FcAbout, FcBusinessContact, FcHome, FcShop } from "react-icons/fc";
import useAdmin from "../CustomHook/useAdmin/useAdmin";
import useSeller from "../CustomHook/useSeller/useSeller";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const DashboardLayout = () => {
    const [isAdmin] = useAdmin()
    const [isSeller] = useSeller()
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    function logOutHandler() {
        logOut().then(() => {
            navigate('/home')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-7 ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-error text-white drawer-button lg:hidden mt-6 shadow-2xl">Open dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu px-4 w-full h-full bg-[rgb(36,36,68)] gap-2 text-white">
                        {/* Sidebar content here */}
                        <img className="h-[60px] w-[60px] mx-auto rounded-full border-4 border-green-900 mt-4" src={user?.photoURL} alt="" />
                        <p className="text-center mb-4">{user?.displayName}</p>

                        {
                            isAdmin && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageUsers"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <FaUserSecret className="w-5 h-5 text-[#79ec06]"></FaUserSecret>MANAGE USERS
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageProducts"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdManageAccounts className="w-6 h-6 text-[#0ceadb]"></MdManageAccounts>MANAGE PRODUCTS
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }
                        {
                            isSeller && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/addNewProduct"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdPostAdd className="w-5 h-5 text-[#00ffdd]"></MdPostAdd> ADD NEW PRODUCT
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myNewProducts"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdProductionQuantityLimits className="w-5 h-5 text-[#00ff04]"></MdProductionQuantityLimits>  MY NEW PRODUCTS
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        {
                            !isAdmin && !isSeller && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/selectedProducts"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <BiSelectMultiple className="w-5 h-5 text-[rgb(0,249,245)]"></BiSelectMultiple>  MY SELECTED PRODUCTS
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myOrderedProduct"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdPayment className="w-5 h-5 text-[#f8bb14]"></MdPayment> MY ORDERED PRODUCTS
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/paymentHistory"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <SiAmazonpay className="w-5 h-5 text-[#dffd00]"></SiAmazonpay> MY PAYMENT HISTORY
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }
                        <hr />

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FcHome className="w-5 h-5 text-white"></FcHome> <span>HOME</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FcShop className="w-5 h-5 text-white"></FcShop> SHOP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FaBloggerB className="w-5 h-5 text-[#d56e59]"></FaBloggerB> BLOG
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FcAbout className="w-5 h-5 text-white"></FcAbout> ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <FcBusinessContact className="w-5 h-5 text-white"></FcBusinessContact> CONTACT
                            </NavLink>
                        </li>

                        <li>
                            <div className="flex mt-8 font-bold gap-3">
                                <BsBoxArrowInRight className="w-5 h-5 text-white"></BsBoxArrowInRight>
                                <p onClick={logOutHandler}>LOGOUT</p>
                            </div>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;