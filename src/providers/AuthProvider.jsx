import { createContext } from "react";
import app from "../firebase-config/firebase";
import { getAuth } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = () => {
    return (
        <div>
            authprovider
        </div>
    );
};

export default AuthProvider;