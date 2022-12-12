const Card = ({ icon, heading, text }) => {
	return (
		<div className="flex h-full w-full flex-col items-start justify-start md:w-1/3">
			<div className="mb-3 flex items-center justify-start">
				<div className="mr-4 text-2xl md:text-3xl">{icon}</div>
				<h3 className="font-josefin text-xl font-light capitalize md:text-2xl">
					{heading}
				</h3>
			</div>
			<p className="text-gray-700">{text}</p>
		</div>
	);
};

export default Card;
