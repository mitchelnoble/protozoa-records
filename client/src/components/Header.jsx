import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Brand Images/Protozoa Records Mobile Logo.png";
import "../styles/component-style/Header.css";

export default function Header(props) {
  const { currentUser } = props;

  return (
    <div className="header">
      <Link to="/vinyls">
        <img className="header-logo" src={logo} alt="navigation logo" />
      </Link>
      {currentUser ? (
        <>
          <p className="user-greeting">Hi, {currentUser.username}!</p>
        </>
      ) : null}
    </div>
  );
}
