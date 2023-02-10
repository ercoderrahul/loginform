import React from "react";

const Login = (props) => {
  return (
    <div className="container">
      <h1>LogIn Page</h1>
      <form action="/" className="Login">
        <input type="text" placeholder="Username" /> <br />
        <input type="password" placeholder="password" /> <br />
{!props.isRegisterd && <input type="password" placeholder="Confirm password" />}
        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Login;
