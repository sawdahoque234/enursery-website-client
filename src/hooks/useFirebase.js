import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile,  signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Home/Login/Firebase/firebase.init';

initializeAuthentication()
// initialize firebase app

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [role, setRole] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                hanldeUserInfo(result.user.email,name);
                setAuthError('');
                // const newUser = { email, displayName: name };
                // setUser(newUser);
               
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    console.log(error)
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                hanldeUserInfo(result.user.email);

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                hanldeUserInfo(result.user.email);
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }
    const hanldeUserInfo = (email,displayName) => {
        fetch("https://cryptic-fortress-77677.herokuapp.com/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({email,displayName}),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));

      };

    // user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
//role
// useEffect(() => {
// fetch(`http://localhost:5000/checkrole/${order?.productName}`)
// .then((res)=>res.json())
// .then((result)=>{
//     console.log(result)
//     setRole(result);
// })
// },[user.productName])
// console.log(role)
//logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));
    }

  
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;