/** @format */
import "../App.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function BankLogin() {
	const navigate = useNavigate();
	return (
		<div>
			<div>
				<img
					src="https://img.freepik.com/premium-vector/online-banking-technology-concept-illustration-bank-electric-circuit-lines-background_387612-43.jpg"
					alt="loginImage"
					className="loginImg"
				/>
			</div>
			<div className="loginCard">
				<Form className="loginForm">
					<h5>Bank login</h5>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button
						variant="primary"
						type="button"
						onClick={() => {
							navigate("/officerDetails");
						}}>
						Login
					</Button>
				</Form>
			</div>
		</div>
	);
}
