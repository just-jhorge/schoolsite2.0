import React from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import NavItem from "./NavItem";
import { links } from "../../data/data";

const SideDrawer = ({ open, close }) => {
	return (
		<div
			className="fixed z-[5000] top-0 left-0 w-full min-h-screen bg-white transition-transform duration-300"
			style={{ transform: `${open ? "translateX(0%)" : "translateX(-100%)"}` }}
		>
			<div className="absolute top-5 right-5" onClick={close}>
				<TfiClose className="text-2xl" />
			</div>
			<nav className="mt-20">
				<div className="container flex flex-col items-start justify-center">
					<Link to="/" className="text-4xl mb-10">
						Home
					</Link>
					{links.map((link) => (
						<NavItem
							key={link.id}
							name={link.name}
							link={link.link}
							dropdown={link.dropdown}
						/>
					))}
				</div>
			</nav>
		</div>
	);
};

export default SideDrawer;
