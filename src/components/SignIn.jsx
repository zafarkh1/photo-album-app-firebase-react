import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignin} className="form-auth">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="pswd">Password</label>
        <input
          type="password"
          id="pswd"
          onChange={(e) => setPassword(e.target.value)}
          required
					min='6'
        />
        <button className="btn">Sign up</button>
      </form>
      <p>
        Need an account? <Link to="/">Register</Link>
      </p>
    </div>
  );
};

export default SignIn;
