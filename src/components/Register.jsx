import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-600 my-10">
        Please Register
      </h1>
      <form>
        <input
          className="border border-gray-300 rounded shadow  p-3"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input
          className="border border-gray-300 rounded shadow my-3 p-3"
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <br />
        <input
          className="p-3 bg-red-300 rounded font-bold text-slate-700 "
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
