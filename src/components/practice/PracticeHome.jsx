import React from "react";
import { Link } from "react-router-dom";

const PracticeHome = () => {
  return (
    <div>
      <Link to="/practice-login">Login</Link>
      <Link to="/practice-register">Register</Link>
    </div>
  );
};

export default PracticeHome;
