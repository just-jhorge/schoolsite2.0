import { Outlet } from "react-router-dom";

const Students = () => {
	return (
		<section className="pt-14">
			<div className="">
				<Outlet />
			</div>
		</section>
	);
};

export default Students;
