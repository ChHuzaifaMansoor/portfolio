import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiReact, SiNextdotjs, SiMysql } from 'react-icons/si';


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#project" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Ch Huzaifa",
  greet: "Hello there! 👋🏻",
  description:
    "I am a dedicated software engineering student with a strong foundation in both frontend and backend development. I enjoy transforming ideas into dynamic web applications and exploring new technologies like React and Tailwind CSS to enhance user experiences. My journey includes developing an e-commerce website, an IoT-based solar car, and various management systems, with a focus on delivering creative and efficient solutions."
};

export const PROJECTS = [
  {
    id: 1,
    name: "PHP E-Commerce Website with Admin Panel",
    description:
      "A dynamic e-commerce website developed using PHP and MySQL. It features an intuitive admin panel for inventory management, order tracking, and reporting, and integrates payment gateways for secure transactions.",
    image: projectImage1,
    githubLink: "http://alhajvarytraders.infinityfreeapp.com",
  },
  {
    id: 2,
    name: "IoT-Based Solar Car Operated by Mobile Application",
    description:
      "An IoT-based solar car controlled via a mobile application using Arduino and Wi-Fi. It includes sensors for real-time data monitoring and a user-friendly interface for remote control.",
    image: projectImage2,
    githubLink: "https://lnkd.in/g7JECRvj",
  },
  {
    id: 3,
    name: "Library Management System (C++)",
    description:
      "A C++ system for managing library operations including member records, lending transactions, and book inventories. Features include member registration, book search, and fine computation.",
    image: projectImage3,
    githubLink: "https://lnkd.in/g7JECRvj",
  },
  
];

export const BIO = [
  "Ch Muhammad Huzaifa Mansoor is pursuing a BS in Software Engineering at Superior University, Lahore, where he is expected to graduate in 2025. His academic journey began with completing ICS from Punjab College, Lahore, and Matric in Science from Islah-Moashra High School.",
  "During his studies,Ch Huzaifa  has developed a passion for web development and innovative technologies. He has worked on professional projects, including developing a PHP-based e-commerce website with an admin panel, and an IoT-based solar car controlled via a mobile application. These projects showcase his ability to integrate creative ideas with modern technologies.",
  "Huzaifa Mansoor is a multi-disciplinary developer with skills ranging from PHP, C++, and JavaScript to modern frameworks like React and Tailwind CSS. His dedication to learning new technologies and delivering efficient solutions makes him a versatile developer with a strong foundation in both frontend and backend development."
];


export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: "3+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    experience: "3+ years",
  },
  {
    icon: <FaJsSquare className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
  {
    icon: <SiReact className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <SiNextdotjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "SQL",
    experience: "3+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
