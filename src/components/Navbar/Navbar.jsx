import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Logo from "../../assets/images/logo.png";

const links = [
	{
		id: 1,
		name: "about",
		link: "about",
		dropdown: [
			{ id: 1, name: "history and facts", link: "history-and-facts" },
			{ id: 2, name: "goals and objectives", link: "goals-and-objectives" },
			{ id: 3, name: "organization and governance", link: "org-and-gov" },
		],
	},
	{
		id: 2,
		name: "admissions",
		link: "admissions",
		dropdown: [
			{ id: 1, name: "application process", link: "admission-process" },
			{ id: 2, name: "entry requirements", link: "entry-requirements" },
			{ id: 3, name: "interview details", link: "interview-details" },
		],
	},
	{
		id: 3,
		name: "academics",
		link: "academics",
		dropdown: [
			{ id: 1, name: "programmes and courses", link: "programmes" },
			{ id: 2, name: "academic facilities", link: "facilities" },
			{ id: 3, name: "academic calendar", link: "academic-calendar" },
		],
	},
	{
		id: 4,
		name: "student life",
		link: "student-life",
		dropdown: [
			{ id: 1, name: "student leadership", link: "student-leadership" },
			{ id: 2, name: "life at NMTC, Kumasi", link: "life-at-nmtc" },
		],
	},
	{
		id: 5,
		name: "media",
		link: "media",
		dropdown: [
			{ id: 1, name: "News", link: "news" },
			{ id: 2, name: "Gallery", link: "gallery" },
		],
	},
	{
		id: 6,
		name: "useful links",
		link: "useful-links",
	},
	{
		id: 7,
		name: "donate",
		link: "donate",
	},
];

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
