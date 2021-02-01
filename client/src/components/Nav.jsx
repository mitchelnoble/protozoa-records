import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Brand Images/Protozoa Landing Logo.png';
import '../styles/component-style/Nav.css';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
             <img className="nav-logo" src={logo} alt="navigation logo" />
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
      ) : (
            <Link to="/login" className="login-icon">Login/Register</Link>
        )}
    </div>
  )
}
