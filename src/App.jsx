import { useState } from "react";
import ScrollToTop from "./utilities/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import ToTop from "./utilities/ToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer";
import MiniNav from "./components/MiniNav/MiniNav";

function App() {
	const [openSide, setOpenSide] = useState(false);

	const openSideDrawer = () => {
		setOpenSide(true);
	};

	const closeSideDrawer = () => {
		setOpenSide(false);
	};

	return (
		<main className="relative min-h-screen">
			{/* <MiniNav /> */}
			<Navbar openSideDrawer={openSideDrawer} />
			<SideDrawer open={openSide} close={closeSideDrawer} />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admissions" element={<Admissions />} />
				</Routes>
			</ScrollToTop>
			<Footer />
			<ToTop />
		</main>
	);
}

export default App;
