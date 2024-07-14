"use client";
import { cn } from "@/utils/cn";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./AnimateGradient";
import { GridGlobe } from "./GridGlobe";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import animationData from "@/data/confetti.json";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[8rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
				className
			)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	index,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	id?: number;
	index: number;
	img: string;
	imgClassName: string;
	titleClassName: string;
	spareImg: string;
}) => {
	const [copied, setCopied] = useState(false);
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.5, delay: index * 0.2 },
			});
		}
	}, [controls, inView, index]);

	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleCopy = () => {
		const MyEmail = "ralalanael@gmail.com";
		navigator.clipboard.writeText(MyEmail);
		setCopied(true);
	};

	return (
		<motion.div
			data-sticky
			key={id}
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}>
			{/* add img divs */}
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<Image
							src={img}
							alt={img}
							className={cn(
								imgClassName,
								"object-cover object-center "
							)}
							layout="fill"
							objectFit="cover"
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					} `}>
					{spareImg && (
						<Image
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
							layout="fill"
							objectFit="cover"
						/>
					)}
				</div>
				{id === 6 && (
					// add background animation , remove the p tag
					<BackgroundGradientAnimation>
						<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}>
					<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-sm text-sm text-[#C1C2D3] z-10">
						{description}
					</div>
					<div
						className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}>
						{title}
					</div>

					{id === 2 && <GridGlobe />}

					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								{["React.js", "Next.js", "Express"].map(
									(item, i) => (
										<span
											key={i}
											className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
						        lg:opacity-100 rounded-lg text-center bg-[#10132E]">
											{item}
										</span>
									)
								)}
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
							</div>
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
								{["Node.js", "Figma", "GraphQl"].map(
									(item, i) => (
										<span
											key={i}
											className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
						        lg:opacity-100 rounded-lg text-center bg-[#10132E]">
											{item}
										</span>
									)
								)}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							<div
								className={`absolute -bottom-5 right-0 ${
									copied ? "block" : "block"
								}`}>
								<Lottie
									options={defaultOptions}
									height={200}
									width={400}
								/>
							</div>

							<MagicButton
								title={
									copied
										? "Email is Copied!"
										: "Copy my email address"
								}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								otherClasses="!bg-[#161A31]"
							/>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
};
