/** @format */

import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function LoginOptions() {
	const nevigate = useNavigate();
	return (
		<div className="loginOptions">
			<div className="images">
				<div className="loginopsdiv">
					<img
						src="https://static.vecteezy.com/system/resources/previews/006/925/139/non_2x/play-button-white-color-lock-user-account-login-digital-design-logo-icon-free-photo.jpg"
						alt="Bank"
						className="loginops"
						onClick={() => {
							nevigate("./bankLogin");
						}}
					/>
					<span className="span">Bank</span>
				</div>
				<div className="loginopsdiv">
					<img
						src="https://static.vecteezy.com/system/resources/previews/006/925/139/non_2x/play-button-white-color-lock-user-account-login-digital-design-logo-icon-free-photo.jpg"
						alt="Officer"
						className="loginops"
					/>
					<span className="span">Officer</span>
				</div>
				<div className="loginopsdiv">
					<img
						src="https://static.vecteezy.com/system/resources/previews/006/925/139/non_2x/play-button-white-color-lock-user-account-login-digital-design-logo-icon-free-photo.jpg"
						alt="Customer"
						className="loginops"
					/>
					<span className="span">Customer</span>
				</div>
			</div>
		</div>
	);
}
