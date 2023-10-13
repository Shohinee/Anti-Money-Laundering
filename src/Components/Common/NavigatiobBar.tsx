/** @format */

import { Container, Navbar } from "react-bootstrap";

export default function NavigatiobBar() {
	return (
		<Navbar className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">Anti-Money-Laundering</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <a href="#login">Mark Otto</a>
					</Navbar.Text>
					<Navbar.Text>
						<a href="#login">Sign Out</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
