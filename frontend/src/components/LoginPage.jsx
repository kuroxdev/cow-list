import React from "react";
import "./LoginPage.css";
function LoginPage({ handleCHangeAuth }) {
  return (
    <div className="center">
      <h1> Welcome</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span> </span>
          <label>Email Address </label>
        </div>

        <div className="txt_field">
          <input type="password" required />
          <span> </span>
          <label> Password </label>
        </div>

        <div className="forgot"> Forgot Password </div>
        <input type="submit" value="Login" onClick={handleCHangeAuth} />
        <div className="users_signup">
          Don't have an account? <a href="#">SignUp</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
