import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function createUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signinUser(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signInPopup(provider) {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    function passwordResetEmail(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function logOut() {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                axios.post('https://glamour-attire.vercel.app/jwt', { email: currentUser?.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [auth])

    const authInfo = {
        user,
        createUser,
        signinUser,
        signInPopup,
        loading,
        passwordResetEmail,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;