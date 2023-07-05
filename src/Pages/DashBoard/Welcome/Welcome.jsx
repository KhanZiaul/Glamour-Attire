import Lottie from "lottie-react";
import welcome from '../../../../public/142725-telegram-welcome-sticker.json'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Welcome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <div>
                <Lottie className="lg:h-[600px] lg:w-[600px]" animationData={welcome} loop={true} />
            </div>
            <div className="space-y-4">
                <h1 className="text-center text-4xl font-bold text-sky-600">WELCOME BACK !!!</h1>
                <h2 className="text-center text-3xl font-semibold uppercase text-blue-600">{user?.displayName}</h2>
            </div>
        </div>
    );
};

export default Welcome;