import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import useAxios from "../../Hooks/useAxios";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const axiosInstance = useAxios()

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
    
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const email = currentUser?.email || user?.email
            if(currentUser?.photoURL === null){
                currentUser.photoURL = "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
            }
            if(currentUser){
                axiosInstance.post("/api/v1/jwt", {email})
                .then(res => console.log(res.data))
                .catch(error => console.log(error))
            }else{
                axiosInstance.post("/api/v1/logout", {email})
                .then(res => console.log(res.data))
                .catch(error => console.log(error))
            }
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unSubscribe()
    },[])
    console.log(user)
    const value = {loading, user, createUser, updateUser, login, loginWithGoogle, logout}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;