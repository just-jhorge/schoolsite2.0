import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Admissions = () => {
	return (
		<section className="pt-14">
			<Banner title="Admissions" />
			<div className="container my-5">
				<Outlet />
			</div>
		</section>
	);
};

export default Admissions;
