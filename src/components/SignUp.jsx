import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/signin.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      console.log("");
    }
    navigateTo("/login");
  };

  return (
    <div className="signup">
      <ToastContainer transition={Bounce} />

      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="user-box">
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <label>Confirm Password</label>
          </div>
          <p className="txt">
            Already have an account?{" "}
            <Link to="/login" className="txt-btn">
              Log In
            </Link>
          </p>
          <br />
          <button className="signup">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button>
        </form>

        <Link to="/">
          <button className="google">
            <div className="btn-circle"></div>
            <div className="btn-circle"></div>
            <p className="btn-text">Sign In With Google</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
