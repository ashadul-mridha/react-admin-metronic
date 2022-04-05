import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth , createUserWithEmailAndPassword, onAuthStateChanged , updateProfile, signOut, signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup    } from "firebase/auth";
import firebaseInitializeApp from "../Firebase/firebaseInitalize";

firebaseInitializeApp();

const useFirebase = () => {

    const history = useNavigate();
    const auth = getAuth();
    const googleProvider =  new GoogleAuthProvider();
    const [user , setUser] = useState({});
    const [loading , setLoading] = useState(false);

    //auth observer
    
    //observer
    useEffect( () => {
        setLoading(true)
        onAuthStateChanged( auth , (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setLoading(false)
        })
    } , [auth])

    //registration
    const registerUserWithEmail = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password) 
    }

    const updateName= (name)=> {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const newUser={...user, displayName: name} // recommend
        setUser(newUser)
            
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    //signin with email 
    const signInWithEmail = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    //signin with google

    const signInWithGoogle = () => {

        setLoading(true);
        signInWithPopup(auth , googleProvider)
        .then( res => {
            setUser(res.user);
            
            console.log(res.user);
        })
        .catch( error => {
            console.log(error);
        })
        .finally( () => {
            history('/');
            setLoading(true);
        })
    }


    //logout
    const logOut = () => {
        setLoading(true)
        signOut(auth)
        .then( res => {
            setUser({});
        })
        .catch( err => {
            console.log(err);
        })
        .finally( () => {
            history('/login')
            setLoading(false)
        })
    }

    return {
        user,
        setUser,
        loading,
        setLoading,
        registerUserWithEmail,
        updateName,
        logOut,
        signInWithEmail,
        signInWithGoogle
    }
}

export default useFirebase;