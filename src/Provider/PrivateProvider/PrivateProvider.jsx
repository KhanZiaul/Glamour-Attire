import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PacmanLoader from "react-spinners/ClipLoader";
import { Navigate, useLocation } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const location = useLocation()
    const {loading ,  user} = useContext(AuthContext)
    if(loading){
        return <PacmanLoader color="#36d7b7" size={150} />
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateProvider;