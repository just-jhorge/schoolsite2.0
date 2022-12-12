import Carousel from "../components/Carousel/Carousel";
import CarouselItem from "../components/Carousel/CarouselItem";
import Management from "../components/Management/Management";
import HomeMarquee from "../components/Marquee/HomeMarquee";
import Partners from "../components/Partners/Partners";
import Programmes from "../components/Programmes/Programmes";
import SchoolData from "../components/SchoolData/SchoolData";
import Welcome from "../components/Welcome/Welcome";
import { carouselItems } from "../data/data";

const Home = () => {
	return (
		<section className="relative">
			<Carousel>
				{carouselItems.map((item) => (
					<CarouselItem
						key={item.id}
						image={item.image}
						heading={item.heading}
					/>
				))}
			</Carousel>
			<Welcome />
			<Management />
			<SchoolData />
			<Programmes />
			<HomeMarquee />
			<Partners />
		</section>
	);
};

export default Home;
