import { GiNurseFemale } from "react-icons/gi";
import Card from "../../../utilities/Card";

const Programmes = () => {
	return (
		<div className="my-14 container flex w-full flex-col items-start justify-center sm:col-span-3">
			<div className="text-center md:text-left">
				<h3 className="mb-10 font-josefin text-2xl font-normal uppercase text-green-500 md:text-3xl">
					<span className="text-black">Our</span> Programmes
				</h3>
				<div className="flex w-full flex-col items-center justify-center md:justify-between gap-8 md:flex-row">
					<Card
						heading="RGN"
						icon={<GiNurseFemale />}
						text="The programme is to enable NMTC, Kumasi produce qualified professional nurses who will contribute creditably to the health care delivery in Ghana."
					/>
					<Card
						heading="RM"
						icon={<GiNurseFemale />}
						text="The programme is to enable NMTC, Kumasi produce qualified professional midwives who will contribute creditably to the health care delivery in Ghana."
					/>
					<Card
						heading="PNNM"
						icon={<GiNurseFemale />}
						text="The programme is to enable NMTC, Kumasi produce qualified professional midwives who will contribute creditably to the health care delivery in Ghana."
					/>
				</div>
			</div>
		</div>
	);
};

export default Programmes;
