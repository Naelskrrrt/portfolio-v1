"use client";
import React, { useState, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: string;
	}[];
	className?: string;
}) => {
	const { scrollY } = useScroll();
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useMotionValueEvent(scrollY, "change", (current) => {
		if (typeof current === "number") {
			let direction = current - lastScrollY;

			if (scrollY.get() < 50) {
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
			setLastScrollY(current);
		}
	});
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/resume.pdf"; // Remplace par le chemin correct vers ton fichier
		link.download = "resume.pdf"; // Nom du fichier téléchargé
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// Made with <3 Copyright (c) 2024 by LALASON Annael

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{
						opacity: 1,
						y: -100,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					exit={{
						y: -100,
						opacity: 0,
					}}
					transition={{
						duration: 0.2,
					}}
					className={cn(
						"flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black-100 backdrop:blur-xl bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pl-4 pr-2 py-2 items-center justify-center space-x-4",
						className
					)}>
					{navItems.map((navItem: any, idx: number) => (
						<Link
							data-sticky
							key={`link=${idx}`}
							href={navItem.link}
							className={cn(
								"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
							)}>
							<span className="block sm:hidden">
								<img
									src={navItem.icon}
									alt="icons"
									width={20}
									height={20}
								/>
							</span>
							<span className="hidden sm:flex gap-2 items-center justify-center cursor-pointer text-md">
								<img
									src={navItem.icon}
									alt="icons"
									width={20}
									height={20}
								/>
								{navItem.name}
							</span>
						</Link>
					))}
					<button
						onClick={handleDownload}
						data-sticky
						className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white ml-1 px-4 py-2 rounded-xl flex items-center gap-2">
						<LuDownload />
						My Resume
						<span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-400 to-transparent h-px" />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
