"use client";

import clsx from "clsx";
import { DM_Sans } from "next/font/google";
import { forwardRef, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FlipWords } from "./ui/FlipWord";
import MagicButton from "./ui/MagicButton";
import Badge from "./ui/OnlineBadge";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect/TextGenerateEffect";
import TextInfiniteScrolling from "./ui/TextInfinite";

const dmSans = DM_Sans({ subsets: ["latin"] });

// eslint-disable-next-line react/display-name
const Hero = forwardRef<HTMLParagraphElement, {}>((props, ref) => {
	const [isHovered, setIsHovered] = useState(false);
	const hoveredElementRef = useRef<HTMLElement | null>(null);

	return (
		<div className="pb-20 pt-36 relative" id="hero">
			<div className="">
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight
					className="top-28 left-80 h-[80vh] w-[50vw]"
					fill="blue"
				/>
			</div>
			<div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>
			<div className="flex justify-center relative my-20">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
					<Badge className="opacity-100 font-bold relative -top-10" />

					<h2 className="uppercase tracking-widest text-xs font-bold md:text-md text-center text-blue-100 w-full cursor-default">
						lalason anna&euml;l Horthannice, Software Developer
					</h2>
					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-9xl cursor-default"
						words="Bringing your projects to life with intuitive design and quality development."
					/>
					<div
						className={
							(clsx(dmSans.className),
							"text-lg align-center gap-2 mt-2 justify md:text-2xl align-text-top")
						}>
						{/* <TextRotator /> */}
						Hi! I am a Creative
						<FlipWords
							className="text-pink-800"
							words={["Developer", "Designer", "Thinker"]}
						/>
					</div>
					<div className="flex gap-3 md:gap-6 py-2">
						<a href="#projects" className="cursor-pointer">
							<MagicButton
								title="Show My Work"
								icon={<FaLocationArrow />}
								position="right"
							/>
						</a>
						<a href="#contact" className="cursor-pointer">
							<MagicButton
								title="Contact Me"
								icon={<FaPhoneAlt />}
								position="right"
							/>
						</a>
					</div>
				</div>
			</div>
			{/* <TextInfiniteScrolling /> */}
		</div>
	);
});

export default Hero;
