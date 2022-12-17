import ApplicationProcess from "./pages/Admissions/ApplicationProcess";
import AcademicFacilities from "./pages/Academics/AcademicFacilities";
import EntryRequirements from "./pages/Admissions/EntryRequirements";
import ProgrammesCourses from "./pages/Academics/ProgrammesCourses";
import InterviewDetails from "./pages/Admissions/InterviewDetails";
import StudentLeadership from "./pages/Students/StudentLeadership";
import AcademicCalendar from "./pages/Academics/AcademicCalendar";
import OrganizationGov from "./pages/About/OrganizationGov";
import GoalsObjectives from "./pages/About/GoalsObjectives";
import SideDrawer from "./components/Navbar/SideDrawer";
import Admissions from "./pages/Admissions/Admissions";
import HistoryFacts from "./pages/About/HistoryFacts";
import LifeAtNmtc from "./pages/Students/LifeAtNmtc";
import Academics from "./pages/Academics/Academics";
import ScrollToTop from "./utilities/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students/Students";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Gallery from "./pages/Media/Gallery";
import About from "./pages/About/About";
import Media from "./pages/Media/Media";
import News from "./pages/Media/News";
import ToTop from "./utilities/ToTop";
import Home from "./pages/Home/Home";
import { useState } from "react";

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
