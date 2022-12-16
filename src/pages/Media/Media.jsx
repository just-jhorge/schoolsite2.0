import { Outlet } from "react-router-dom";

const Media = () => {
	return (
		<section className="pt-14">
			<div className="container">
				<Outlet />
			</div>
		</section>
	);
};

export default Media;
