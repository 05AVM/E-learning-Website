import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import Course1 from "./assets/Course1.jpg";
import Course2 from "./assets/Course2.jpg";
import Course3 from "./assets/Course3.jpg";
import Course4 from "./assets/Course4.jpg";
import Course5 from "./assets/Course5.jpg";
import Course6 from "./assets/Course6.jpg";
import Course7 from "./assets/Course7.jpg";
import Course8 from "./assets/Course8.jpg";

import logo1 from "./assets/logo1.jpg";
import logo2 from "./assets/logo2.jpg";
import logo3 from "./assets/logo3.jpg";
import logo4 from "./assets/logo4.jpg";
import logo5 from "./assets/logo5.jpg";
import logo6 from "./assets/logo6.jpg";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "teacher",
    link: "Teacher",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];

export const courses = [
  {
    id: 1,
    image: Course1,
    category: "Web Design",
    title: "The Complete Web Design Course",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 2,
    image: Course2,
    category: "Web Development",
    title: "FullStack Web Development Course",
    rating: 4.8,
    participants: 700,
    price: 125,
  },
  {
    id: 3,
    image: Course3,
    category: "Web Development",
    title: "Python Beginner to Advanced Course",
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: Course4,
    category: "Web Design",
    title: "UI/UX Design Crazy Course With Harrys",
    rating: 4.7,
    participants: 600,
    price: 85,
  },
  {
    id: 5,
    image: Course5,
    category: "AI Development",
    title: "AI Development With Python (complete beginner course)",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 6,
    image: Course6,
    category: "Web Design",
    title: "The Complete Web Design Course",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 7,
    image: Course7,
    category: "Web Design",
    title: "The Complete Web Design Course",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 8,
    image: Course8,
    category: "Web Design",
    title: "The Complete Web Design Course",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is Skillex?",
  },
  {
    id: 2,
    title: "What can I learn from Skillex?",
  },
  {
    id: 3,
    title: "Can I teach on Skillex?",
  },
  {
    id: 4,
    title: "What is included in my Skillex membership?",
  },
];