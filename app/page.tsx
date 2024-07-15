"use client";
import Approach from "@/components/Approach";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/ui/Preloader";

import { useEffect, useRef, useState } from "react";

// Définir le type pour les éléments de navigation

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotiveScroll = new LocomotiveScroll();

			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);

	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProject />
				<Experiences />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
