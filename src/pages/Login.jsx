import React, {  useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import useLogin from "../Hooks/useLogin";
import logo from "../assets/images/res-logo.png"
const Login = () => {
  const { loginUser, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      alert("Login successful!");
      console.log("Logged in user name:", user.displayName);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        
        <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-md">
          <img src={logo} alt="logo" className="w-20 h-20 mx-auto" />
          <h5 className="mt-4">Login</h5>
          <form className="mt-10" onSubmit={submitHandler}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-gray-500">Don't have an account? <a href="/register" className="text-blue-500 hover:text-blue-600">Register here</a></p>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
