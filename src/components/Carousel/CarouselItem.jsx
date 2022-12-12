import { BsArrowRightCircle } from "react-icons/bs";

const CarouselItem = ({ image, heading, width }) => {
	return (
		<div className="carousel-item" style={{ width: width }}>
			<div className="absolute z-30 bottom-0 w-full h-1/2 bg-gradient-to-t from-black/100 to-black/0" />
			<div className="relative flex flex-col items-center justify-center text-center w-full h-full">
				<img
					src={image}
					className="w-full h-full object-cover"
					alt="School Picture"
				/>
				<div className="absolute z-50 bottom-5 md:bottom-28">
					<h3 className="text-sm md:text-4xl mb-3 md:mb-5 max-w-[20rem] md:max-w-[50rem] whitespace-normal">
						{heading}
					</h3>
					<div className="flex items-center justify-center gap-5 text-xs">
						<div className="center-item gap-2">
							<BsArrowRightCircle />
							<p>Read story</p>
						</div>
						<div className="center-item gap-2">
							<BsArrowRightCircle />
							<p>More stories</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselItem;
