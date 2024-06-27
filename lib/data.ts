import React from "react";
import { FaReact, FaLaravel} from "react-icons/fa";
import { FaLaravel} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import newsRoomCMS from "@/public/newsRoomCMS.jpg";
import SubscriptionBox from "@/public/subscriptionBox.jpg"
import Ulabrp from "@/public/ulabrp.jpg"


export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated University",
		location: "Dhaka, Bangladesh",
		description:
			"I graduated with a BSc in Computer Science and Engineering. After that, I began developing projects for various clients.",		
		icon: React.createElement(LuGraduationCap),
		date: "02/02/2023",
	},
	{
		title: "Full-Stack Developer",
		location: "Dhaka, Bangladesh",
		description: 
			"I've worked as a full-stack developer and freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB.",		
		icon: React.createElement(FaReact),
		date: "2023 - 2024",
	},
		{
		title: "Junior Full-Stack Developer",
		location: "Dhaka, Bangladesh",
		description:
			"I'm currently a full-stack developer at System Resources Limited. My tech stack includes React, Next.js, TypeScript, Tailwind, PHP, Laravel, MySQL, and MongoDB.",		
		icon: React.createElement(FaLaravel),
		date: "2024 - present",
	},
] as const;

export const projectsData = [
	{
		title: "newsRoomCMS",
		description:
			"I worked as a full-stack developer on this startup project.It was built on MERN stack. It's a factcheck website made for factwatchBD(CQS).",
		tags: ["MongoDB", "Express", "React", "Node.js", "MUI"],
		imageUrl: newsRoomCMS,
	},
	{
		title: "SubscriptionBox",
		description:
			"It was a FullProject build with PHP. I build it for the Web Technology course. ",
		tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
		imageUrl: SubscriptionBox,
	},
	{
		title: "ULAB Publication Reward",
		description:
			"A private web app for ULAB research publication. It's for ulab faculty and research work.",
		tags: ["Laravel", "Blade", "SQL", "Tailwind", "Filament"],
		imageUrl: Ulabrp,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MongoDB",
	"Redux",
	"Express",
	"Python",
	"Php",
	"Laravel",
	"MySQL"
	"Framer Motion",
] as const;
