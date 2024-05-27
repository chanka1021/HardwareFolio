import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

const useRegister = () => {
  const [error, setError] = useState(null);

  const registerUser = async (name, email, password) => {
    setError(null); // Reset error state before attempting to register
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with display name
      await updateProfile(user, { displayName: name });

      console.log("User registered:", user);
    } catch (error) {
      setError(error.message);
      console.error("Error registering user:", error);
    }
  };

  return { registerUser, error };
};

export default useRegister;
