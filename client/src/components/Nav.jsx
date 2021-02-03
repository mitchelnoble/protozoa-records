import React from 'react';
import { Link } from 'react-router-dom';
// import logo1 from '../assets/Brand Images/Protozoa Landing Logo.png';
import logo from '../assets/Brand Images/Protozoa Records Mobile Logo.png';
import '../styles/component-style/Nav.css';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  console.log(props);
  return (
    <div className="nav">
      <Link to="/">
             <img className="nav-logo" src={logo} alt="navigation logo" />
      </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
      ) : (
            <Link to="/login" className="login-icon">Login/Register</Link>
        )}
      <Link to="/vinyls" className="records-link">Vinyls</Link>
      <Link to="/genres" className="genres-link">Genres</Link>
      {currentUser ? <Link to="/vinyls/sell" className="sell-link">Sell</Link> : null}
      <Link to="/about" className="about-link">About</Link>
    </div>
  )
}
