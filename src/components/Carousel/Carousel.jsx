import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { TfiAngleLeft, TfiAngleRight, TfiAngleDown } from "react-icons/tfi";

const Carousel = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			// if (!paused) {
			updateIndex(activeIndex + 1);
			// }
		}, 7000);

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	return (
		<div {...handlers} className="carousel">
			<div
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</div>
			<button
				className="absolute bottom-0 top-0 left-5 text-white"
				onClick={() => {
					updateIndex(activeIndex - 1);
				}}
			>
				<TfiAngleLeft className="text-xl md:text-7xl" />
			</button>
			<div className="hidden w-full absolute bottom-5 md:flex items-center justify-center gap-2 md:gap-4 text-white animate-bounce">
				<TfiAngleDown className="text-3xl" />
			</div>
			<button
				className="absolute bottom-0 top-0 right-5 text-white"
				onClick={() => {
					updateIndex(activeIndex + 1);
				}}
			>
				<TfiAngleRight className="text-xl md:text-7xl" />
			</button>
		</div>
	);
};

export default Carousel;
