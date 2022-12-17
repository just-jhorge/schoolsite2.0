import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import SideDrawer from "./components/Navbar/SideDrawer";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ToTop from "./utilities/ToTop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Admissions from "./pages/Admissions/Admissions";
import Academics from "./pages/Academics/Academics";
import Media from "./pages/Media/Media";
import HistoryFacts from "./pages/About/HistoryFacts";
import GoalsObjectives from "./pages/About/GoalsObjectives";
import OrganizationGov from "./pages/About/OrganizationGov";
import InterviewDetails from "./pages/Admissions/InterviewDetails";
import EntryRequirements from "./pages/Admissions/EntryRequirements";
import ApplicationProcess from "./pages/Admissions/ApplicationProcess";
import ProgrammesCourses from "./pages/Academics/ProgrammesCourses";
import AcademicFacilities from "./pages/Academics/AcademicFacilities";
import AcademicCalendar from "./pages/Academics/AcademicCalendar";
import Students from "./pages/Students/Students";
import StudentLeadership from "./pages/Students/StudentLeadership";
import LifeAtNmtc from "./pages/Students/LifeAtNmtc";
import News from "./pages/Media/News";
import Gallery from "./pages/Media/Gallery";

function App() {
	const location = useLocation();
	const [openSide, setOpenSide] = useState(false);

	const openSideDrawer = () => {
		setOpenSide(true);
	};

	const closeSideDrawer = () => {
		setOpenSide(false);
	};

	console.log(openSide);

	return (
		<main className="relative min-h-screen">
			<Navbar bg={location.pathname} openSideDrawer={openSideDrawer} />
			<SideDrawer open={openSide} close={closeSideDrawer} />
			<ScrollToTop>
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="about" element={<About />}>
						<Route path="history-and-facts" element={<HistoryFacts />} />
						<Route path="goals-and-objectives" element={<GoalsObjectives />} />
						<Route path="org-and-gov" element={<OrganizationGov />} />
					</Route>
					<Route path="admissions" element={<Admissions />}>
						<Route path="admission-process" element={<ApplicationProcess />} />
						<Route path="entry-requirements" element={<EntryRequirements />} />
						<Route path="interview-details" element={<InterviewDetails />} />
					</Route>
					<Route path="academics" element={<Academics />}>
						<Route path="programmes" element={<ProgrammesCourses />} />
						<Route path="facilities" element={<AcademicFacilities />} />
						<Route path="academic-calendar" element={<AcademicCalendar />} />
					</Route>
					<Route path="student-life" element={<Students />}>
						<Route path="life-at-nmtc" element={<LifeAtNmtc />} />
						<Route path="student-leadership" element={<StudentLeadership />} />
					</Route>
					<Route path="media" element={<Media />}>
						<Route path="news" element={<News />} />
						<Route path="gallery" element={<Gallery />} />
					</Route>
				</Routes>
			</ScrollToTop>
			<Footer />
			<ToTop />
		</main>
	);
}

export default App;
