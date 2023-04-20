import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React from "react";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const RegisterP = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //email and password value
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        sendVerificationEmail(result.user);
      })
      .catch((error) => console.log(error));
  };

  // email verification
  const sendVerificationEmail = (user) => {
    sendEmailVerification(user).then((result) => {
      console.log(result);
      alert("verify email");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-600 my-10">
        Please Register Practice
      </h1>
      <form onSubmit={handleSubmit}>
        <input
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
      <p></p>
      <p className="text-green-500 font-semibold"></p>
    </div>
  );
};

export default RegisterP;
