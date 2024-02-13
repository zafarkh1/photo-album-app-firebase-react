import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="form-auth">
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
        />
        <button className="btn">Sign up</button>
      </form>
      <div className="google">
        <p>-------- or --------</p>
        <button className="google-button" onClick={handleGoogle}>
          <img
            src="https://banner2.cleanpng.com/20180326/gte/kisspng-google-logo-g-suite-google-guava-google-plus-5ab8b5b15fd9f4.0166567715220545773927.jpg"
            alt=""
            className="google-icon"
          />
        </button>
        <p>
          Already a user? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
