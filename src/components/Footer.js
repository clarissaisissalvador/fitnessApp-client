import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer(){
	return(
		<>
		<footer className="footer-bg pt-5">
			<Container fluid>
				<Row className="px-5 justify-content-between">
     			 	
     			 	{/* Brand Summary */}
					<Col md={6} lg={5} className="mb-4">
					<h4 className="fw-bold text-muted">StayFit</h4>
					<p className="text-muted">
						Your personal fitness companion — track your progress, set your goals, and build better habits. 
					</p>
					<blockquote className="fst-italic text-success mt-3 mb-0">
						"No limits. Just goals."
					</blockquote>
				</Col>

      			{/* Navigation & Support */}
				<Col md={5} lg={4}>
				<Row>
					<Col xs={6}>
					<h6 className="text-muted">Navigation</h6>
					<ul className="list-unstyled d-flex flex-column gap-2">
						<li><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
						<li><Link to="/workouts" className="text-decoration-none text-muted">Workouts</Link></li>
						<li><Link to="/faqs" className="text-decoration-none text-muted">FAQs</Link></li>
					</ul>
				</Col>
				<Col xs={6}>
				<h6 className="text-muted">Support</h6>
				<ul className="list-unstyled d-flex flex-column gap-2">
					<li><Link to="/contact" className="text-decoration-none text-muted">Contact Us</Link></li>
					<li><Link to="/terms" className="text-decoration-none text-muted">Terms & Conditions</Link></li>
					<li><Link to="/privacy" className="text-decoration-none text-muted">Privacy Policy</Link></li>
				</ul>
			</Col>
		</Row>
	</Col>
</Row>

<hr className="mx-5 border-secondary" />

    {/* Bottom Row */}
<Row className="px-5 pb-3">
	<Col className="text-muted small text-center">
	© 2025 StayFit. All rights reserved.
</Col>
</Row>
</Container>
</footer>

</>

)
}