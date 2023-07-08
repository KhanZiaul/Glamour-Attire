import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ScaleLoader from "react-spinners/ClipLoader";
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../CustomHook/useSeller/useSeller';

const SellerProvider = ({ children }) => {
    const location = useLocation()
    const [isSeller, , isLoading] = useSeller()
    const { loading, user } = useContext(AuthContext)
    if (loading || isLoading) {
        return (
            <div className='h-[100vh] flex justify-center items-center'>
                <ScaleLoader
                    color="#3641d6"
                    height={100}
                    margin={10}
                    radius={10}
                    width={4}
                />
            </div>
        )
    }
    if (user && isSeller) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerProvider;