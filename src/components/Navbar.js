import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation(){
	return(
		<>
		<section>
			<Navbar expand="lg" className="custom-navbar fixed-top shadow">
				<Container>
					<Navbar.Brand href="#home" className="fw-bold text-white">StayFit</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbar-nav" />
					<Navbar.Collapse id="navbar-nav" className="w-100">
						<Nav className="ms-auto gap-5">
							<Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
							<Nav.Link as={Link} to="/workouts" className="text-white">Workouts</Nav.Link>
							<Nav.Link as={Link} to="/faqs" className="text-white">FAQs</Nav.Link>
							<Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
							<Nav.Link as={Link} to="/register" className="text-white border-start">Sign Up</Nav.Link>
						</Nav>

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</section>
		</>

		)
}