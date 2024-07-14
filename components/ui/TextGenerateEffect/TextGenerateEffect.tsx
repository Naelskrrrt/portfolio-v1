"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { Syne } from "next/font/google";
import clsx from "clsx";

const syne = Syne({ subsets: ["latin"] });

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(" ");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.2),
			}
		);
	}, [animate, scope]);

	const renderWords = () => {
		return (
			<motion.div ref={scope} className={clsx(syne.className)}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							data-sticky
							className={`${
								idx > 8
									? "text-purple "
									: "dark:text-white text-black"
							} opacity-0 font-medium text-6xl`}>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-syne font-normal text-generate ", className)}>
			<div className="mt-2 mb-6">
				<div className=" dark:text-white text-black  leading-snug tracking-wide md:text-5xl text-4xl">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
