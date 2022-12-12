import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MiniNav = () => {
	return (
		<div className="bg-green-600 px-5 py-1 text-xs text-white sm:px-0 sm:text-sm">
			<div className="mx-auto flex items-center justify-between md:w-[90%] lg:w-[70%]">
				<div className="flex flex-col items-start justify-center md:flex-row md:items-center">
					<div className="mb-1 flex items-center justify-center sm:mb-0">
						<RiPhoneFill className="text-lg" />
						<a href="tel:+233553080825" className="ml-1">
							(+233) 553 080-825
						</a>
					</div>
					<div className="mx-3 hidden h-4 border-[1px] border-x-white md:block" />
					<div className="flex items-center justify-center">
						<RiMailFill className="text-lg" />
						<a href="mailto:info@nmtckumasi.edu.gh" className="ml-1">
							administration@nmtckumasi.edu.gh
						</a>
					</div>
				</div>
				<div className="flex flex-col items-end justify-center md:flex-row md:items-center">
					<div className="mb-1 flex items-center justify-center sm:mb-0">
						<a
							href="https://portal.healthtraining.gov.gh/login"
							target="_blank"
							rel="noreferrer"
							className="ml-1 hover:underline"
						>
							Student Portal
						</a>
					</div>
					<div className="mx-3 hidden h-4 border-[1px] border-x-white md:block" />
					<div className="flex items-center justify-center">
						<a href="/" className="ml-1 hover:underline">
							E-Library
						</a>
					</div>
					<div className="mx-3 hidden h-4 border-[1px] border-x-white md:block" />
					<div className="flex items-center justify-center">
						<Link to="/alumini" className="ml-1 hover:underline">
							Alumini
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiniNav;
