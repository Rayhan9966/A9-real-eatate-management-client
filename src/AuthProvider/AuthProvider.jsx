import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, 
    signInWithPopup,FacebookAuthProvider,onAuthStateChanged,
    signOut} from "firebase/auth";
export const AuthContext=createContext(null)
import {auth} from "../firebase/firebase.config"

const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null)

    const googleProvider=new GoogleAuthProvider()
    const facebookProvider=new FacebookAuthProvider()
    const registerUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
        // .then(result=>console.log(result.user));

    }
    const loginUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
        // .then(result=>console.log(result.user));

    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const facebookLogin=()=>{
        return signInWithPopup(auth,facebookProvider)
    }
const logout=()=>{
return signOut(auth)

}
const authInfo={
    registerUser,
    loginUser,
    googleLogin,
    facebookLogin,
    user,
    setUser,
    logout
    
}
useEffect(()=>{

   const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
        if (currentUser) {
     setUser(currentUser)
        //   const uid = user.uid;
          // ...
        } else {
         setUser(null)
        }
      });
      return()=>{
        unsubscribe()
      }

},[])
    return (
        <div>
          {/* <AuthContext.Provider value={user}>  {children}</AuthContext.Provider> */}
          {/* <AuthContext.Provider value={user}>{children}</AuthContext.Provider> */}
          <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;