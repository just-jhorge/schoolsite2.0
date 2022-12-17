import adminTwo from "../assets/images/admin-two.jpg";
import adminThree from "../assets/images/admin-three.jpg";
import matriculationOne from "../assets/images/matriculation_1.webp";

export const carouselItems = [
	{
		id: 1,
		image: matriculationOne,
		heading:
			"NMTC Kumasi hosts it's 17th Matriculation ceremony for 2021/2022 batch of new nurses and midwives at the College's foreground",
	},
	{
		id: 2,
		image: adminTwo,
		heading:
			"NMTC Kumasi awarded with GHC20,000 by Coca-Cola for immense contribution to health care system in Ghana",
	},
	{
		id: 3,
		image: adminThree,
		heading:
			"NMTC Kumasi awarded with GHC20,000 by Coca-Cola for immense contribution to health care system in Ghana",
	},
];

export const links = [
	{
		id: 1,
		name: "about",
		link: "about",
		dropdown: [
			{ id: 1, name: "history and facts", link: "history-and-facts" },
			{ id: 2, name: "goals and objectives", link: "goals-and-objectives" },
			{ id: 3, name: "organization and governance", link: "org-and-gov" },
		],
	},
	{
		id: 2,
		name: "admissions",
		link: "admissions",
		dropdown: [
			{ id: 1, name: "application process", link: "admission-process" },
			{ id: 2, name: "entry requirements", link: "entry-requirements" },
			{ id: 3, name: "interview details", link: "interview-details" },
		],
	},
	{
		id: 3,
		name: "academics",
		link: "academics",
		dropdown: [
			{ id: 1, name: "programmes and courses", link: "programmes" },
			{ id: 2, name: "academic facilities", link: "facilities" },
			{ id: 3, name: "academic calendar", link: "academic-calendar" },
		],
	},
	{
		id: 4,
		name: "student life",
		link: "student-life",
		dropdown: [
			{ id: 1, name: "student leadership", link: "student-leadership" },
			{ id: 2, name: "life at NMTC, Kumasi", link: "life-at-nmtc" },
		],
	},
	{
		id: 5,
		name: "media",
		link: "media",
		dropdown: [
			{ id: 1, name: "News", link: "news" },
			{ id: 2, name: "Gallery", link: "gallery" },
		],
	},
	{
		id: 6,
		name: "useful links",
		link: "useful-links",
	},
	{
		id: 7,
		name: "donate",
		link: "donate",
	},
];
