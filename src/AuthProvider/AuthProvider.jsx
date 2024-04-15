import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext=createContext(null)
import {auth} from "../firebase/firebase.config"

const AuthProvider = ({children}) => {
    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>console.log(result.user));

    }
    const loginUser=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>console.log(result.user));

    }

const authInfo={
    registerUser,
    loginUser
}

    return (
        <div>
          {/* <AuthContext.Provider value={user}>  {children}</AuthContext.Provider> */}
          {/* <AuthContext.Provider value={user}>{children}</AuthContext.Provider> */}
          <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;