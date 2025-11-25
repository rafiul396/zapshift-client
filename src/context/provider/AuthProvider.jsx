import React, { useEffect, useState } from 'react';
import { AuthContext } from '../authcontext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true)

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const googleLogIn = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        registerUser,
        googleLogIn,
        loginUser,
        users,
        setUsers,
        logOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;