import Marquee from "react-fast-marquee";
import knust from "../../assets/images/knust.png";
import moh from "../../assets/images/moh.png";
import nab from "../../assets/images/nab.jpg";
import nmc from "../../assets/images/nmc.jpg";
import ucc from "../../assets/images/ucc.webp";

const Partners = () => {
	return (
		<Marquee direction="right" speed={50}>
			<div className="flex items-center justify-center gap-10 md:gap-32 py-3 md:py-5">
				<img src={knust} className="h-24 md:h-40" alt="KNUST" />
				<img src={moh} className="h-24 md:h-40" alt="MOH" />
				<img src={nab} className="h-24 md:h-40" alt="NAB" />
				<img src={nmc} className="h-24 md:h-40" alt="NMC" />
				<img src={ucc} className="h-24 md:h-40" alt="UCC" />
			</div>
		</Marquee>
	);
};

export default Partners;
