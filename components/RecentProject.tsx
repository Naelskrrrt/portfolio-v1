import { PROJECTS } from "@/data";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PinContainer } from "./ui/3dpin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const RecentProject = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true, // L'animation se déclenche une seule fois
		threshold: 0.1, // Se déclenche lorsque 10% de l'élément est visible
	});

	useEffect(() => {
		if (inView) {
			PROJECTS.forEach((_, index) => {
				controls.start((i) => ({
					opacity: 1,
					y: 0,
					transition: { duration: 0.5, delay: i * 0.2 },
				}));
			});
		}
	}, [controls, inView]);

	return (
		<div className="py-20" id="projects">
			<h1 data-sticky className="heading">
				A small selection of
				<span className="text-purple"> recent projects</span>
			</h1>
			<div
				ref={ref}
				className="flex flex-wrap items-center justify-center p-4 gap-x-16 mt-10">
				{PROJECTS.map(
					({ id, title, des, img, iconLists, link }, index) => (
						<motion.div
							data-sticky
							key={id}
							className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex item-center justify-center sm:w-[570px] w-[80vw]"
							initial={{ opacity: 0, y: 50 }} // État initial
							animate={controls} // Utilise les contrôles d'animation
							custom={index} // Passe l'index comme paramètre custom
						>
							<PinContainer title={link} href={link}>
								<div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
									<div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
										<Image
											src="/bg.png"
											alt="bg-img"
											fill={true}
										/>
									</div>
									<Image
										src={img}
										alt={title}
										className="z-10 absolute bottom-0"
										// style={{ objectFit: "contain" }}
										fill={true}
										objectFit="contain"
									/>
								</div>
								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{title}
								</h1>
								<p className="lg-text-xl lg:font-normal font-light text-sm line-clamp-2">
									{des}
								</p>
								<div className="flex items-center justify-between mt-7 mb-3">
									<div className="flex items-center">
										{iconLists.map((icon, index) => (
											<div
												key={icon}
												className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center flex-wrap max-w-[100%] items-center"
												style={{
													transform: `translateX(-${
														5 * index * 2
													}px)`,
												}}>
												<Image
													src={icon}
													alt="icon"
													className="p-2"
													fill={true}
												/>
											</div>
										))}
									</div>
									<div className="flex justify-center items-center">
										<p className="flex lg:text-lg md:text-s text-sm text-purple p-2">
											Check This
										</p>
										<FaLocationArrow
											className="ms-3"
											color="#cbacf9"
										/>
									</div>
								</div>
							</PinContainer>
						</motion.div>
					)
				)}
			</div>
		</div>
	);
};

export default RecentProject;
