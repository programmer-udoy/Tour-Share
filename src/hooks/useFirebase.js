import { useEffect, useState } from "react";
import initializeFirebase from "../pages/authentication/Firebase/firebase.init";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();
  const [admin, setAdmin] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history,location) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.push(destination);
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUserToDatabase(email,name,"POST");
        
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
         

      

        // Signed in
        const user = userCredential.user;

        console.log(user);

        // ...
      })
      .catch((error) => {
        

        setError(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setLoading(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const destination = location?.state?.from || "/";
        history.push(destination);
        // Signed in
        const user = userCredential.user;
       
        // ...
      })
      .catch((error) => {
       

        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //google sign in 
  const signInWithGoogle=(location,history)=>{
    setLoading(true);

    signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setError("");
      saveUserToDatabase(user.email,user.displayName,"PUT")
      const destination = location?.state?.from || "/";
        history.push(destination);
      // ...
    }).catch((error) => {
      // Handle Errors here.
     
      const errorMessage = error.message;
      setError(errorMessage)
     
      // ...
    })
    .finally(()=>setLoading(false))

  }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return () => unsubscribed;
  }, [auth]);


  //if admin role is exist check
  useEffect(() => {
    fetch(`https://peaceful-caverns-31356.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  //logOUt 
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setError("");
      })
      .catch((error) => {
        // An error happened.
        setError(error);
      });
  };

  //save user in database

  const saveUserToDatabase = (email, displayName, method) => {
  const userSaveInDatabase = { email, displayName };
  fetch("https://peaceful-caverns-31356.herokuapp.com/users", {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userSaveInDatabase),
  }).then();
};
  return {
    registerUser,
    logOut,
    loginUser,
    signInWithGoogle,
    user,
    loading,
    error,
    admin,
  };
};

export default useFirebase;