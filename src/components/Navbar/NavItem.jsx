import { Link } from "react-router-dom";

const NavItem = ({ name, link }) => {
	return (
		<li className="h-full capitalize flex items-center justify-center cursor-pointer">
			<Link to={link}>{name}</Link>
		</li>
	);
};

export default NavItem;
