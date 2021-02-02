// import { Link } from 'react-router-dom';
import Nav from '../components/Nav'; 

export default function Layout(props) {
  const { currentUser } = props;
  const { handleLogout } = props;
  return (
    <div>
      <Nav
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <hr />
      {currentUser && (
        <>
        </>
      )}
      {props.children}
    </div>
  );
}
