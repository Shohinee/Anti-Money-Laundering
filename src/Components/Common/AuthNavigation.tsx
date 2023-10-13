/** @format */
import { Nav, Navbar } from "react-bootstrap";
export default function AuthNavigation() {
	return (
		<Navbar bg="dark" data-bs-theme="dark" className="mb-10">
			<Nav className="me-auto">
				<Nav.Link href="#home">Add Officer</Nav.Link>
				<Nav.Link href="/manageCustomer">Manage Customer</Nav.Link>
				<Nav.Link href="#pricing">View Transactions</Nav.Link>
				<Nav.Link href="#Suspected">Suspected List</Nav.Link>
				<Nav.Link href="#Feedback">View Feedback</Nav.Link>
			</Nav>
		</Navbar>
	);
}
