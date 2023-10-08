import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    //create user
     const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }
     //sign in with email and password
     const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
    //sign in with google
     const signInWithGoogle =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
     //sign in with github
     const  signInWithGithub =() => {
        setLoading(true)
        return  signInWithPopup(auth, githubProvider)
     }
     //sign out
     const logout = () =>{
        setLoading(true)
        return signOut(auth)
     }

     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false)
            console.log('observing current user inside useEffect of authprovider ', currentUser);
        })
        return () =>{
            unSubscribe()
        }
     },[])
     
    const authInfo = {user,loading,createUser,signInUser,signInWithGoogle,signInWithGithub,logout}
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