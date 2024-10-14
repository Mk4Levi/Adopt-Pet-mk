import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
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

    // Check if all fields are filled
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("All fields are required!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    // Handle successful signup (you can add logic here to actually register the user)
    toast.success("Account created successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });

    // Redirect to login page after success
    setTimeout(() => {
      navigateTo("/login");
    }, 2000); // Delay to show the success toast before redirecting
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
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
          <button type="submit" className="signup">
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
