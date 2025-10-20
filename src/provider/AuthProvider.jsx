import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosOpen from "../hooks/useAxiosOpen";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosOpen();

  // ✅ Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Sign In
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Google Sign In
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // ✅ Logout (Fixed version)
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } finally {
      localStorage.removeItem("access_token"); // ✅ Token remove on logout
      setUser(null);
      setLoading(false);
    }
  };

  // ✅ Update User Profile
  const UpdateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    });
  };

  // ✅ Observe User & Manage JWT
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access_token", res.data.token);
          }
          setLoading(false);
        });
      } else {
        localStorage.removeItem("access_token");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    UpdateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
