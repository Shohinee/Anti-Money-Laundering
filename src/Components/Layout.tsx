/** @format */
import { Outlet } from "react-router-dom";
import NavigatiobBar from "./Common/NavigatiobBar";

export default function Layout() {
	return (
		<div>
			<NavigatiobBar />
			<Outlet />
		</div>
	);
}
