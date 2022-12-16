import React from "react";
import { TfiClose } from "react-icons/tfi";

const Video = ({ visibility, close }) => {
	return (
		<div
			className={`relative ${
				visibility ? "block" : "hidden"
			} w-screen h-screen`}
		>
			<iframe
				className="h-full w-full"
				src="https://www.youtube.com/embed/jBpNa_8IpD8?autoplay=1&mute=1&controls=0&loop=1"
			></iframe>
			<div
				className="absolute flex items-center justify-center top-10 right-10 z-[6000] h-10 w-10 bg-white rounded-full cursor-pointer"
				onClick={close}
			>
				<TfiClose className="text-2xl" />
			</div>
		</div>
	);
};

export default Video;
