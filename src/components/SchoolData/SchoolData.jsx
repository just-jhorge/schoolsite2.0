const SchoolData = () => {
	return (
		<div className="flex h-full items-center justify-center bg-[#767676] py-16 text-white">
			<div className="container h-full grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-gray-300 md:w-[90%]">
				<div className="h-full flex items-center justify-center">
					<div className="text-center">
						<p className="text-5xl md:text-7xl font-extralight">50+</p>
						<p className="font-light uppercase">courses taught</p>
					</div>
				</div>
				<div className="h-full flex items-center justify-center">
					<div className="text-center">
						<p className="text-5xl md:text-7xl font-extralight">55+</p>
						<p className="font-light uppercase">Years Completed</p>
					</div>
				</div>
				<div className="h-full flex items-center justify-center">
					<div className="text-center">
						<p className="text-5xl md:text-7xl font-extralight">4000+</p>
						<p className="font-light uppercase">Students &amp; Alumini</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchoolData;
