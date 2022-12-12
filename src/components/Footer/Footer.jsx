import { Link } from "react-router-dom";
import {
	FaFacebookF,
	FaTwitter,
	FaYoutube,
	FaLinkedinIn,
	FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Footer = () => {
	return (
		<footer className="w-full bg-[#404041] py-16">
			<div className="container flex flex-col gap-10 text-white">
				<div>
					<h3 className="text-2xl md:text-4xl text-gray-400 font-bold mb-3">
						Quick Links
					</h3>
					<div className="grid grid-cols-2 gap-5 md:flex items-start justify-between">
						<div>
							<h5 className="md:text-xl font-semibold mb-3">The College</h5>
							<div className="flex flex-col items-start justify-center gap-1 font-light text-xs">
								<Link to="/">Webmail</Link>
								<Link to="/">Student Information System</Link>
								<Link to="/">Academic Calendar</Link>
								<Link to="/">Institutional Repository</Link>
							</div>
						</div>
						<div>
							<h5 className="md:text-xl font-semibold mb-3">New Here?</h5>
							<div className="flex flex-col items-start justify-center gap-1 font-light text-xs">
								<Link to="/">Our Campus</Link>
								<Link to="/">Alumini Stories</Link>
								<Link to="/">Campus Life Blog</Link>
								<Link to="/">Awards &amp; Recognition</Link>
							</div>
						</div>
						<div>
							<h5 className="md:text-xl font-semibold mb-3">For Businesses</h5>
							<div className="flex flex-col items-start justify-center gap-1 font-light text-xs">
								<Link to="/">Career Services Office</Link>
								<Link to="/">Recruit NMTC-Kumasi Students</Link>
								<Link to="/">Job Openings</Link>
								<Link to="/">Support NMTC-Kumasi</Link>
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-2">
							<div className="hidden md:flex items-center justify-center">
								<input
									type="text"
									className="py-1.5 px-2.5 text-xs outline-none text-black"
									placeholder="Your Email Address"
								/>
								<button className="bg-gray-600 text-xs py-1.5 px-2.5">
									Subscribe
								</button>
							</div>
							<div className="flex flex-wrap items-start justify-start gap-2">
								<a href="/" className="p-1.5 md:p-3 bg-gray-400 rounded-full">
									<FaFacebookF />
								</a>
								<Link to="/" className="p-1.5 md:p-3 bg-gray-400 rounded-full">
									<FaTwitter />
								</Link>
								<Link to="/" className="p-1.5 md:p-3 bg-gray-400 rounded-full">
									<FaYoutube />
								</Link>
								<Link to="/" className="p-1.5 md:p-3 bg-gray-400 rounded-full">
									<FaLinkedinIn />
								</Link>
								<a
									href="https://instagram.com/nmtckumasi?igshid=YmMyMTA2M2Y="
									target="_blank"
									className="p-1.5 md:p-3 bg-gray-400 rounded-full"
								>
									<FaInstagram />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h3 className="text-2xl md:text-4xl text-gray-300 font-bold mb-3">
						Contact Us
					</h3>
					<div className="grid grid-cols-2 gap-5 md:flex items-start justify-between">
						<div>
							<h5 className="md:text-xl font-semibold mb-3">Stress Address</h5>
							<div className="flex flex-col items-start justify-center gap-1 font-light text-xs">
								<Link to="/">KATH 🏥</Link>
								<Link to="/">Bantama, A/R (See Map Here)</Link>
							</div>
						</div>
						<div>
							<h5 className="md:text-xl font-semibold mb-3">Postal Address</h5>
							<div className="flex flex-col items-start justify-center gap-1 font-light text-xs">
								<Link to="/">P.O.Box KS 110</Link>
								<Link to="/">Adum - Kumasi, Ghana</Link>
							</div>
						</div>
						<div>
							<h5 className="md:text-xl font-semibold mb-3">
								Phone &amp; Email
							</h5>
							<div className="flex flex-col items-start justify-center gap-1 font-light text-xs">
								<a href="tel:233241385150">+233 231 385 150</a>
								<a href="mailto:info@nmtckumasi.edu.gh">
									info@nmtckumasi.edu.gh
								</a>
							</div>
						</div>
						<div>
							<h5 className="md:text-xl font-semibold mb-3">See Also</h5>
							<div className="flex flex-col items-start justify-center gap-1 font-light text-xs">
								<Link to="/">+ Career Services Office</Link>
								<Link to="/">+ Recruit NMTC-Kumasi Students</Link>
								<Link to="/">+ Job Openings</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-end justify-between">
					<div className="flex flex-col md:flex-row items-start md:items-end md:gap-10">
						<img
							src={logo}
							className="h-32 md:h-52 md:translate-y-7"
							alt="School Crest"
						/>
						<p className="text-xs">
							&copy; NMTC, Kumasi. Est. 1996. All rights reserved.
						</p>
					</div>
					<div className="center-item gap-3 text-xs">
						<Link to="/">Site Policies</Link>
						<div className="hidden md:block h-5 w-[2px] bg-white" />
						<Link to="/">Site Maps</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
