import { Link } from 'react-router-dom';
import Nav from '../components/Nav'; 

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Nav/>
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
