import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Logo from "../../assets/images/logo.png";

const links = [
	{ id: 1, name: "about", link: "about" },
	{ id: 2, name: "admissions", link: "admissions" },
	{ id: 3, name: "academics", link: "academics" },
	{ id: 4, name: "student life", link: "student-life" },
	{ id: 5, name: "media", link: "media" },
	{ id: 6, name: "useful links", link: "useful-links" },
	{ id: 7, name: "donate", link: "donate" },
];

const Navbar = ({ openSideDrawer }) => {
	return (
		<nav className="absolute z-[1000] w-full h-14 bg-white md:bg-transparent text-black md:bg-gradient-to-b from-black/90 to-black/0 border-b border-gray-300 md:text-white">
			<div className="px-4 md:px-0 md:container h-full flex items-center justify-between">
				<div>
					<img src={Logo} className="h-12" alt="School Crest" />
				</div>
				<ul className="h-full hidden md:flex items-center justify-center gap-x-10">
					<li className="h-full center-item cursor-pointer">
						<Link to="/">Home</Link>
					</li>
					{links.map((link) => (
						<NavItem link={link.link} key={link.id} name={link.name} />
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
