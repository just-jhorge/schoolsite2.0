import { Outlet } from "react-router-dom";

const Academics = () => {
	return (
		<section className="pt-14">
			<div className="container">
				<Outlet />
			</div>
		</section>
	);
};

export default Academics;
