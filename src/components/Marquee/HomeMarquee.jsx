import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HomeMarquee = () => {
	return (
		<Marquee
			pauseOnHover={true}
			speed={80}
			gradient={false}
			className="w-full py-3 bg-green-500 text-white"
		>
			<p className="mr-5">
				Admission for UCC Top Up Degree Programme is now available.{" "}
				<Link to="/" className="underline">
					Register
				</Link>{" "}
				now!
			</p>
			<p className="mr-5">
				Admission for UCC Top Up Degree Programme is now available.{" "}
				<Link to="/" className="underline">
					Register
				</Link>{" "}
				now!
			</p>
			<p className="mr-5">
				Admission for UCC Top Up Degree Programme is now available.{" "}
				<Link to="/" className="underline">
					Register
				</Link>{" "}
				now!
			</p>
		</Marquee>
	);
};

export default HomeMarquee;
