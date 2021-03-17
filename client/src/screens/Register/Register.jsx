import React, { useState } from "react";
import '../../styles/screens-styles/Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <div className="all-register">
        <h2 className="register-title">Register</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <label className="register-label">
            Username:
            <input className="register-form"
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="email-label">
            Email:
            <input className="email-form"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input className="register-password-form"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}
