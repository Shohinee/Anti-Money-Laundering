/** @format */

import { Outlet } from "react-router-dom";
import AuthNavigation from "../Common/AuthNavigation";

export default function LayoutOne() {
	return (
		<div>
			<AuthNavigation />
			<div className="mt-3">
				<Outlet />
			</div>
		</div>
	);
}
