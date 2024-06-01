import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    setError(null); 
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home'); 
      window.location.reload(); 

    } catch (error) {
      setError(error.message);
      console.error("Error logging in user:", error);
    }
  };

  return { loginUser, error };
};

export default useLogin;
