import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    //create user
     const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
     }
     //sign in with email and password
     const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
     }
    //sign in with google
     const signInWithGoogle =() =>{
        return signInWithPopup(auth, googleProvider)
     }

    const authInfo = {createUser,signInUser,signInWithGoogle}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider;