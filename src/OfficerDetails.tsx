/** @format */

import { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

export default function OfficerDetails() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<h3 className="mt-3">Officer Details</h3>
			<Button variant="primary" onClick={handleShow}>
				+Add New Officer
			</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicOfficeId">
							<Form.Control type="number" placeholder="***" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Control type="text" placeholder="Enter Name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicDOB">
							<Form.Control type="date" placeholder="dd-mm-yyyy" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicAddress">
							<Form.Control type="text" placeholder="Address" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicContactNo">
							<Form.Control type="number" placeholder="Contact No" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Button
							variant="primary"
							onClick={() => {
								setShow(false);
							}}>
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
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
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
