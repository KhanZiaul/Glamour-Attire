import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PacmanLoader from "react-spinners/ClipLoader";
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../CustomHook/useAdmin/useAdmin';

const AdminProvider = ({children}) => {
    const location = useLocation()
    const [isAdmin, , isLoading] = useAdmin()
    const {loading ,  user} = useContext(AuthContext)
    if(loading || isLoading){
        return <PacmanLoader color="#36d7b7" size={150} />
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default AdminProvider;