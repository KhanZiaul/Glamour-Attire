import Lottie from "lottie-react";
import welcome from '../../../../public/142725-telegram-welcome-sticker.json'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useTitle from "../../../CustomHook/useTitle/useTitle";
import useScroll from "../../../CustomHook/useScroll/useScroll";
import { useLocation } from "react-router-dom";

const Welcome = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('Welcome | Dashboard')
    const {user} = useContext(AuthContext)
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <div>
                <Lottie className="h-100vh lg:h-[600px] lg:w-[600px]" animationData={welcome} loop={true} />
            </div>
            <div className="space-y-4">
                <h1 className="text-center text-4xl font-bold text-sky-600">WELCOME</h1>
                <h2 className="text-center text-3xl font-semibold uppercase text-blue-600">{user?.displayName}</h2>
            </div>
        </div>
    );
};

export default Welcome;