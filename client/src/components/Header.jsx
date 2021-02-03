import React from 'react';
import { Link } from 'react-router-dom';
// import logo1 from '../assets/Brand Images/Protozoa Landing Logo.png';
import logo from '../assets/Brand Images/Protozoa Records Mobile Logo.png';
import '../styles/component-style/Header.css';

export default function Header(props) {
  const { currentUser } = props;
  
  return (

    <div className="nav">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="navigation logo" />
      </Link>
      {currentUser ? (
        <>
          <p className="user-greeting">Hi, {currentUser.username}!</p>
        </>
      ) : (
          null)}
    </div>
  )
};
