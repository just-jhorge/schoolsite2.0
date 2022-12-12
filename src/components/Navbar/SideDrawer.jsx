import React from "react";
import { TfiClose } from "react-icons/tfi";

const SideDrawer = ({ open, close }) => {
	return (
		<div
			className="fixed z-[5000] top-0 left-0 w-full h-screen bg-white transition-transform duration-300"
			style={{ transform: `${open ? "translateX(0%)" : "translateX(-100%)"}` }}
		>
			<div className="absolute top-5 right-5" onClick={close}>
				<TfiClose className="text-2xl" />
			</div>
		</div>
	);
};

export default SideDrawer;
