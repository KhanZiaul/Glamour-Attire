import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

const PrivateProvider = ({ children }) => {
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)
    if (loading) {
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
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateProvider;