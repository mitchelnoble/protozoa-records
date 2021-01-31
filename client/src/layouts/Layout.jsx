import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <h1>Vinyls</h1>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to="/vinyls">Vinyls</Link>
        </>
      )}
      {props.children}
    </div>
  );
}
