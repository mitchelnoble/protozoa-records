// import { Link } from 'react-router-dom';
import Nav from '../components/Nav'; 
import Header from '../components/Header';
import '../styles/component-style/Layout.css'

export default function Layout(props) {
  const { currentUser } = props;
  const { handleLogout } = props;
  return (
    <div>
      <Header currentUser={currentUser} />
      <Nav
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <hr className="nav-border" />
      {currentUser && (
        <>
        </>
      )}
      {props.children}
    </div>
  );
}
