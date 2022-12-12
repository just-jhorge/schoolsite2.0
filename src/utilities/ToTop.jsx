import { BiArrowToTop } from "react-icons/bi";

const ToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<button
			title="Scroll To Top"
			onClick={scrollToTop}
			className="fixed z-[1000] drop-shadow-md flex items-center justify-center bottom-5 right-5 bg-green-500  h-12 w-12 rounded-full text-white"
		>
			<BiArrowToTop className="text-3xl" />
		</button>
	);
};

export default ToTop;
