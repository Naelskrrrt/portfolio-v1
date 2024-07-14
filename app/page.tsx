"use client";
import Experiences from "@/components/Experiences";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import { useRef } from "react";
import {
	LuBriefcase,
	LuFolderGit2,
	LuHelpCircle,
	LuPhone,
} from "react-icons/lu";

// Définir le type pour les éléments de navigation
type NavItem = {
	name: string;
	link: string;
	icon: JSX.Element;
};

export const NAV_ITEMS: NavItem[] = [
	{ name: "About", link: "#about", icon: <LuHelpCircle /> },
	{ name: "Projects", link: "#projects", icon: <LuFolderGit2 /> },
	{ name: "Experiences", link: "#experiences", icon: <LuBriefcase /> },
	{ name: "Contact", link: "#contact", icon: <LuPhone /> },
];

export default function Home() {
	const stickyElement = useRef(null);

	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={NAV_ITEMS} />
				<Hero ref={stickyElement} />
				<Grid />
				<RecentProject />
				<Experiences />
			</div>
		</main>
	);
}
