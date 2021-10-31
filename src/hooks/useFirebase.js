import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "./../Firebase/firebase.init";

initializeAuthentication();





const useFirebase = () => {

    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();





    //observer -- check state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);



    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);

    };

    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }




    return {
        user,
        setUser,
        signInUsingGoogle,
        signInUsingGithub,
        isLoading,
        setIsLoading,
        logOut
    };
};

export default useFirebase;