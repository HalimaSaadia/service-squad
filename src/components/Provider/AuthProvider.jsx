import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name,photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL: photo
        })
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
        
            if(currentUser?.photoURL === null){
                currentUser.photoURL = "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
            }
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unSubscribe()
    },[])
    console.log(user)
    const value = {loading, user, createUser, updateUser, login, loginWithGoogle}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;