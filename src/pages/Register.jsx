import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import useRegister from "../Hooks/Register";
import logo from "../assets/images/res-logo.png"

const Register = () => {
  const { registerUser, error } = useRegister();
  const navigate = useNavigate();
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;

    try {
      await registerUser(name, email, password);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-md">
        <img src={logo} alt="logo" className="w-20 h-20 mx-auto" />

          <h5 className="mt-4">Sign Up</h5>
          <form className="mt-10" onSubmit={submitHandler}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full name"
                required
                ref={signupNameRef}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                ref={signupEmailRef}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                ref={signupPasswordRef}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </Helmet>
  );
};

export default Register;
