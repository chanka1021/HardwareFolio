import { auth, database  as db} from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
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

      // Add user information to Realtime Database
      await set(ref(db, `users/${user.uid}`), {
        uid: user.uid,
        displayName: name,
        email: user.email,
      });

      console.log("User registered and added to Realtime Database:", user);
    } catch (error) {
      setError(error.message);
      console.error("Error registering user:", error);
    }
  };

  return { registerUser, error };
};

export default useRegister;
