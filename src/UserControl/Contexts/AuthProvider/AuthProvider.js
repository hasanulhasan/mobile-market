import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log('user entered')
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();

  }, [])

  const authInfo = { createUser, signIn, user, logOut, updateUser, loading, providerLogin }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;