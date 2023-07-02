import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PacmanLoader from "react-spinners/ClipLoader";
import { Navigate } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {loading ,  user} = useContext(AuthContext)
    if(loading){
        return <PacmanLoader color="#36d7b7" size={150} />
    }
    if(user){
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateProvider;