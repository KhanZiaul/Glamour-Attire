import { NavLink, Outlet } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { MdPostAdd, MdPayment } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FcAbout , FcBusinessContact , FcHome , FcShop} from "react-icons/fc";
import useAdmin from "../CustomHook/useAdmin/useAdmin";
import useSeller from "../CustomHook/useSeller/useSeller";

const DashboardLayout = () => {

    const [isAdmin] = useAdmin()
    const [isSeller] = useSeller()

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-7 ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-error text-white drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-8 px-5 w-80 h-full bg-slate-500 gap-4 font-semibold text-white">
                        {/* Sidebar content here */}
                        {
                            isAdmin && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageClasses"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdManageAccounts className="w-5 h-5 text-white"></MdManageAccounts>MANAGE SELLERS
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageUsers"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <FaUserSecret className="w-5 h-5 text-white"></FaUserSecret>MANAGE USERS
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
                                            to="/dashboard/addAClass"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdPostAdd className="w-5 h-5 text-white"></MdPostAdd> ADD NEW PRODUCT
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myClasses"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdProductionQuantityLimits className="w-5 h-5 text-white"></MdProductionQuantityLimits>  MY NEW PRODUCTS
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        {
                            !isAdmin && !isSeller && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/userClass"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <BiSelectMultiple className="w-5 h-5 text-white"></BiSelectMultiple>  MY SELECTED PRODUCTS
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/enrolledClasses"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <MdPayment className="w-5 h-5 text-white"></MdPayment> MY ORDERED PRODUCTS 
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/paymentHistory"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <SiAmazonpay className="w-5 h-5 text-white"></SiAmazonpay> MY PAYMENT HISTORY
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
                                <FaBloggerB className="w-5 h-5 text-white"></FaBloggerB> BLOG
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
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;