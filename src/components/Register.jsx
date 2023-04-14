import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);

    // validate
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("please add at least one upperca4se");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("please  use one special character");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        e.target.reset();
        setSuccess("user has created successfully");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleEmChange = (event) => {
    // console.log(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-600 my-10">
        Please Register
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmChange}
          className="border border-gray-300 rounded shadow  p-3"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your Email"
        />
        <br />
        <input
          className="border border-gray-300 rounded shadow my-3 p-3"
          type="password"
          name="password"
          id="password"
          required
          placeholder="password"
        />
        <br />
        <input
          className="p-3 bg-red-300 rounded font-bold text-slate-700 "
          type="submit"
          value="Register"
        />
      </form>
      <p>{error}</p>
      <p className="text-green-500 font-semibold">{success}</p>
    </div>
  );
};

export default Register;
