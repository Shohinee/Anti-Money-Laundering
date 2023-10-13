/** @format */
import { Route, Routes } from "react-router-dom";
import LoginOptions from "./Components/LoginOptions";
import Layout from "./Components/Layout";
import BankLogin from "./Components/BankLogin";
import OfficerDetails from "./OfficerDetails";
import LayoutOne from "./Components/InnerPages/LayoutOne";
import ManageCustomer from "./ManageCustomer";
export default function AppRouter() {
	return (
		<div>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" Component={LoginOptions} />
					<Route path="/bankLogin" Component={BankLogin} />
				</Route>
				<Route element={<LayoutOne />}>
					<Route path="/officerDetails" Component={OfficerDetails} />
					<Route path="/manageCustomer" Component={ManageCustomer} />
				</Route>
			</Routes>
		</div>
	);
}
