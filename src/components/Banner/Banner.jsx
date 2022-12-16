import kente from "../../assets/images/kente_banner.jpg";

const Banner = ({ title }) => {
	return (
		<>
			<div className="banner flex h-32 w-full items-center justify-center object-center md:h-60">
				<h3 className="font-josefin text-2xl font-bold uppercase text-white md:text-4xl">
					{title}
				</h3>
			</div>
			<img src={kente} className="h-4 md:h-10 w-full" alt="Kente" />
		</>
	);
};

export default Banner;
