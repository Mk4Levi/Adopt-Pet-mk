import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      console.log("");
    }
    navigateTo("/dashboard/profile");
  };

  return (
    <div className="login">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={(e) => handleFormSubmit(e)}>
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
          <p className="txt">
            Don't have an account?{" "}
            <Link to="/signup" className="txt-btn">
              Sign Up
            </Link>
          </p>
          <br />

          <button className="signup">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log In
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

export default Login;
