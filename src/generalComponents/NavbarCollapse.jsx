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
      <Container>
        <Navbar.Brand href="/">DOOSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {!currentUser 
            ? <Nav.Link href="/login">Log In</Nav.Link>
            : <>
                <Nav.Link href="/taskmanager">Task Manager</Nav.Link>
                <Nav.Link href="/calendar">Calendar</Nav.Link>
                <Nav.Link href="/" onClick={() => handleLogOut()}>Log Out</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCollapse;