import { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ name, link, dropdown }) => {
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
		<li className="relative h-full capitalize flex items-center justify-center">
			{dropdown ? (
				<p onClick={() => setOpenDropdown(!openDropdown)}>{name}</p>
			) : (
				<Link to={link} onClick={() => setOpenDropdown(false)}>
					{name}
				</Link>
			)}
			<div
				className={`absolute flex-col items-start justify-start bg-green-500 left-0 top-14 p-5 ${
					!dropdown && "hidden"
				} ${openDropdown ? "flex" : "hidden"}`}
			>
				{dropdown &&
					dropdown.map((dropdownLink) => (
						<Link
							onClick={() => setOpenDropdown(false)}
							className="whitespace-nowrap"
							to={`/about/${dropdownLink.link}`}
						>
							{dropdownLink.name}
						</Link>
					))}
			</div>
		</li>
	);
};

export default NavItem;
