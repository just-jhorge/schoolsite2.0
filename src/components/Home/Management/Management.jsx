import womanPlaceholder from "../../../assets/images/placeholder-woman.jpg";
import manPlaceholder from "../../../assets/images/placeholder-man.jpg";
import gannan from "../../../assets/images/gertrude_n_annan.jpg";
import theo from "../../../assets/images/theophilus_azaanaang.jpg";

const Management = () => {
	return (
		<div className="container my-10 flex flex-col items-start justify-center">
			<div className="grid grid-cols-2 gap-5 md:grid-cols-6">
				<figure className="w-full" title="Joana Owusu-Danso">
					<img
						src={womanPlaceholder}
						alt="Programme Head Midwifery"
						className="mb-3 rounded-tr-3xl rounded-bl-3xl shadow-md brightness-80 transition-all hover:brightness-100"
					/>
					<figcaption className="text-center text-xs capitalize md:text-base">
						<h3 className="text-sm">joana owusu danso</h3>
						<p className="text-gray-400 text-xs italic">principal</p>
					</figcaption>
				</figure>
				<figure className="w-full" title="Veronica Oduro Kwarteng">
					<img
						src={womanPlaceholder}
						alt="Vice Principal"
						className="mb-3 rounded-tr-3xl rounded-bl-3xl shadow-md brightness-80 transition-all hover:brightness-100"
					/>
					<figcaption className="text-center text-xs capitalize md:text-base">
						<h3 className="text-sm">veronica o. kwarteng</h3>
						<p className="text-gray-400 text-xs italic">vice principal</p>
					</figcaption>
				</figure>
				<figure className="w-full" title="Gertrude Nancy Annan Aidoo">
					<img
						src={gannan}
						alt="Programme Head Midwifery"
						className="mb-3 rounded-tr-3xl rounded-bl-3xl shadow-md brightness-80 transition-all hover:brightness-100"
					/>
					<figcaption className="text-center text-xs capitalize md:text-base">
						<h3 className="text-sm">gertrude n. a aidoo</h3>
						<p className="text-gray-400 text-xs italic">
							programme head, midwifery
						</p>
					</figcaption>
				</figure>
				<figure className="w-full" title="Helena Bonnah">
					<img
						src={womanPlaceholder}
						alt="Programme Head Nursing"
						className="mb-3 rounded-tr-3xl rounded-bl-3xl shadow-md brightness-80 transition-all hover:brightness-100"
					/>
					<figcaption className="text-center text-xs capitalize md:text-base">
						<h3 className="text-sm">helena bonnah</h3>
						<p className="text-gray-400 text-xs italic">
							programme head, nursing
						</p>
					</figcaption>
				</figure>
				<figure className="w-full" title="Theophilus H. Azaanaang">
					<img
						src={theo}
						alt="Administrator"
						className="mb-3 rounded-tr-3xl rounded-bl-3xl shadow-md brightness-80 transition-all hover:brightness-100"
					/>
					<figcaption className="text-center text-xs capitalize md:text-base">
						<h3 className="text-sm">theophilus azaanaang</h3>
						<p className="text-gray-400 text-xs italic">administrator</p>
					</figcaption>
				</figure>
				<figure className="w-full" title="Collins Amankwah">
					<img
						src={manPlaceholder}
						alt="Head of Finance"
						className="mb-3 rounded-tr-3xl rounded-bl-3xl shadow-md brightness-80 transition-all hover:brightness-100"
					/>
					<figcaption className="text-center text-xs capitalize md:text-base">
						<h3 className="text-sm">Collins Amankwah</h3>
						<p className="text-gray-400 text-xs italic">head of finance</p>
					</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default Management;
