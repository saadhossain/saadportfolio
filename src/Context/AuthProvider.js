import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    //Set Logged in user to a State
    const [user, setUser] = useState();
    //Create New User using email and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Update User Profile
    const updateUser = ( fullName,profileImage) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: profileImage
        })
    }
    //SignIn User
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Get LoggedIn User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [auth]);
    const logOut = () => {
        return signOut(auth)
    }
    const userInfo = {userRegister, updateUser, userLogin, user, logOut}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;