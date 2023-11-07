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
                currentUser.photoURL = "https://media.istockphoto.com/id/1487995045/photo/3d-minimal-identity-verification-success-user-authentication-success-avatar-icon-with.webp?b=1&s=170667a&w=0&k=20&c=CqtvKd0C4KXun7yE6PDCLJL7pGpmyWutqDCYyVllVn0="
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

    const value = {loading, user, createUser, updateUser, login, loginWithGoogle, logout}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;