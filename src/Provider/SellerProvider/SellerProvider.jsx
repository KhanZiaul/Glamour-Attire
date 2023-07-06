import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PacmanLoader from "react-spinners/ClipLoader";
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../CustomHook/useSeller/useSeller';

const SellerProvider = ({children}) => {
    const location = useLocation()
    const [isSeller, , isLoading] = useSeller()
    const {loading ,  user} = useContext(AuthContext)
    if(loading || isLoading){
        return <PacmanLoader color="#36d7b7" size={150} />
    }
    if(user && isSeller){
        return children
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default SellerProvider;