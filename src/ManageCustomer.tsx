/** @format */

import {
	Button,
	Col,
	Form,
	InputGroup,
	Nav,
	Navbar,
	Row,
	Table,
} from "react-bootstrap";

export default function ManageCustomer() {
	return (
		<div>
			<h3>Manage Customer</h3>
			<Navbar className="bg-body-tertiary justify-content-end">
				<Form className="inline">
					<Row>
						<Col xs="auto">
							<Form.Control
								type="text"
								placeholder="Search"
								className=" mr-sm-2"
							/>
						</Col>
						<Col xs="auto">
							<Button type="submit">Submit</Button>
						</Col>
					</Row>
				</Form>
			</Navbar>
			<Table striped bordered hover size="sm" className="mt-5">
				<thead>
					<tr>
						<th>Id</th>
						<th>Bank-Id</th>
						<th>Name</th>
						<th>Date of Birth</th>
						<th>Address</th>
						<th>Contact</th>
						<th>Email-Id</th>
						<th colSpan={2}>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>
							<Nav.Link href="#home">Account Details</Nav.Link>
						</td>
						<td>
							<Button>Deny Access</Button>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
