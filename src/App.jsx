import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import ToTop from "./utilities/ToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Navbar/SideDrawer";

function App() {
	const location = useLocation();
	const [openSide, setOpenSide] = useState(false);

	const openSideDrawer = () => {
		setOpenSide(true);
	};

	const closeSideDrawer = () => {
		setOpenSide(false);
	};

	return (
		<main className="relative min-h-screen">
			<Navbar bg={location.pathname} openSideDrawer={openSideDrawer} />
			<SideDrawer open={openSide} close={closeSideDrawer} />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/admissions" element={<Admissions />} />
				</Routes>
			</ScrollToTop>
			<Footer />
			<ToTop />
		</main>
	);
}

export default App;
