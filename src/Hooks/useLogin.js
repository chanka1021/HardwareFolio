import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState(null);

  const loginUser = async (email, password) => {
    setError(null); // Reset error state before attempting to login
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);
      
      // Save user data to local storage
      localStorage.setItem('user', JSON.stringify(user));
      
      // Optionally, you can also store the user's token or any other necessary information
      
    } catch (error) {
      setError(error.message);
      console.error("Error logging in user:", error);
    }
  };

  return { loginUser, error };
};

export default useLogin;
