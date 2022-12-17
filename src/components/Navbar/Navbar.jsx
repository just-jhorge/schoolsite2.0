import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { links } from "../../data/data";
import NavItem from "./NavItem";
import Logo from "../../assets/images/logo.png";

const Navbar = ({ openSideDrawer, bg }) => {
	return (
		<nav
			className={`absolute z-[1000] w-full h-14 ${
				bg == "/"
					? "bg-transparent bg-gradient-to-b from-black/90 to-black/0 text-white"
					: "bg-white text-black"
			} border-b border-gray-300 transition-all duration-300`}
		>
			<div className="px-4 md:px-0 md:container h-full flex items-center justify-between">
				<div>
					<img src={Logo} className="h-12" alt="School Crest" />
				</div>
				<ul className="h-full hidden md:flex items-center justify-center gap-x-10">
					<li className="h-full center-item cursor-pointer">
						<Link to="/">Home</Link>
					</li>
					{links.map((link) => (
						<NavItem
							key={link.id}
							link={link.link}
							name={link.name}
							dropdown={link.dropdown}
						/>
					))}
				</ul>
				<div className="flex items-center justify-center gap-4">
					<AiOutlineMenu
						className="block md:hidden text-2xl"
						onClick={openSideDrawer}
					/>
					<BiSearch className="hidden md:block text-2xl" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
