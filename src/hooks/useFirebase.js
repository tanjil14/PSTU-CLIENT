import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  // const singInUsingGoogle = () => {
  //   return signInWithPopup(auth, googleProvider);
  // };
  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setError("");
        history.replace("/");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            //profile updated
          })
          .catch((error) => {
            //an error occurred
          });
        //   storeUser(newUser);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        //    const errorCode=error.code;
        //    const errorMessage=error.message;
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  };
  //observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  // useEffect(() => {
  //   fetch(`https://morning-refuge-62244.herokuapp.com/users/${user.email}`)
  //     .then((res) => res.json())
  //     .then((res) => setAdmin(res.admin));
  // }, [user.email]);
  // const storeUser = (user) => {
  //   axios
  //     .post("https://morning-refuge-62244.herokuapp.com/users/", user)
  //     .then((res) => {
  //       if (res.data.insertedId) {
  //         alert("Added successfully");
  //       }
  //     });
  // };
  return {
    user,
    error,
    registerUser,
    logOut,
    loginUser,
    loading,
  };
};
export default useFirebase;
