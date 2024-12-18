import { createContext, useEffect, useState } from "react";
import app from "../firebase-config/firebase";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";



export const AuthContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sign-up 
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log-in 
    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sign-in
    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // log-out 
    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // jwt- post request, get token
            if (currentUser) {
                axios.post(`https://gadget-shop-server-beta.vercel.app/authentication`, {
                    email: currentUser.email
                })
                    .then(res => {
                        if (res.data) {
                            console.log(res.data.token);
                            localStorage.setItem('access-token', res?.data?.token)
                            setLoading(false);
                        }
                    })
                    .catch(err => console.log(err))
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }

        })
        return (
            () => {
                return unsubscribe();
            }
        )
    }, []);

    const authInfo = {
        user,
        CreateUser,
        LogIn,
        GoogleSignIn,
        LogOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;