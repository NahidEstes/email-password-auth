import React, { useRef, useState } from "react";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const LoginP = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    //email and password value
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // reset password
  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide a email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("please check your email");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Practice Login
      </h2>

      {/* ----- Form ----- */}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6 flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-gray-700 font-bold"
          >
            Remember me
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <button
            onClick={handleResetPassword}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </button>
        </div>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default LoginP;
