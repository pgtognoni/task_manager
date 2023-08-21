import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import '../firebaseConfig'

function NavbarCollapse() {

  const { currentUser, setCurrentUser } = useAuth();

  const handleLogOut = () => {

    let auth = getAuth();
    signOut(auth);
    setCurrentUser(null);
  }

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className='p-2'>
      <div className='container-fluid'>
        <Navbar.Brand href={currentUser ? "" : "/"}>
          <img src='/DXLogo.svg' alt='DX' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between container-fluid">
            <div className='d-flex flex-column flex-sm-row'>
              {currentUser && <Nav.Link href="/taskmanager">Task Manager</Nav.Link>}
              {currentUser && <Nav.Link href="/calendar">Calendar</Nav.Link>}
            </div>
            <div className='log-btn-container'>
              {!currentUser 
                ? <Nav.Link href="/login" className='btn-log'>Log In</Nav.Link>
                : <Nav.Link href="/" onClick={() => handleLogOut()} className='btn-log'>Log Out</Nav.Link>
              }
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarCollapse;