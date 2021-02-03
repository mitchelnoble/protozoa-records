import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/screens-styles/Login.css';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="auth-container" >
      <div className="all-login">

      <h2 className="login-title">Login</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <label className="username-label">
          Username:
            <input className="username-form"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            />
        </label>
        <br />
        <label className="password-label">
          Password:
            <input className="password-form"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            />
        </label>
        <hr />
        <button className="login-button">Login</button>
        <br />
        <p>or</p>
        <Link className="logout-link" to="/register">Register</Link>
      </form>
            </div>
    </div>
  )
}
