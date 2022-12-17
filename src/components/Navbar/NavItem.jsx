import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiAngleDown } from "react-icons/tfi";

const NavItem = ({ name, link, dropdown }) => {
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
		<li className="relative h-full capitalize flex flex-col md:flex-row items-start md:items-center justify-center mb-7 md:mb-0">
			{dropdown ? (
				<div
					className="flex items-center justify-center gap-3 cursor-pointer text-4xl md:text-base"
					onClick={() => setOpenDropdown(!openDropdown)}
				>
					<p>{name}</p>
					<TfiAngleDown />
				</div>
			) : (
				<Link
					className="text-4xl md:text-base"
					to={link}
					onClick={() => setOpenDropdown(false)}
				>
					{name}
				</Link>
			)}
			<div
				className={`block md:absolute flex-col items-start justify-start gap-2 md:gap-5 bg-white md:shadow-lg text-black left-0 md:top-14 md:p-5 p-2 ${
					!dropdown && "hidden"
				} ${openDropdown ? "flex" : "hidden"}`}
			>
				{dropdown &&
					dropdown.map((dropdownLink) => (
						<Link
							key={dropdownLink.id}
							onClick={() => {
								setOpenDropdown(false);
							}}
							className="whitespace-nowrap hover:text-green-500 transition-colors duration-200"
							to={`/${link}/${dropdownLink.link}`}
						>
							{dropdownLink.name}
						</Link>
					))}
			</div>
		</li>
	);
};

export default NavItem;
