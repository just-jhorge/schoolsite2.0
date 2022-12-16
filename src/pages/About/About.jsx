import banner from "../../assets/images/banner.jpg";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const About = () => {
	return (
		<section className="pt-14">
			<Banner title="About" />
			<div className="container my-5">
				<Outlet />
			</div>
		</section>
	);
};

export default About;
