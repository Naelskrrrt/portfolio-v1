import React from "react";

import { WORK_EXPERIENCES } from "@/data";
import { Button } from "./ui/MovingBorder";
// import { Button } from "./ui/MagicButton";

const Experience = () => {
	return (
		<div className="py-20 w-full" id="experience">
			<h1 className="heading">
				My <span className="text-purple">work experience</span>
			</h1>

			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{WORK_EXPERIENCES.map((card) => (
					<Button
						data-sticky
						key={card.id}
						//   random duration will be fun , I think , may be not
						duration={Math.floor(Math.random() * 10000) + 10000}
						borderRadius="1.75rem"
						style={{
							//   add these two
							//   you can generate the color from here https://cssgradient.io/
							background: "rgb(4,7,29)",
							backgroundColor:
								"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
							// add this border radius to make it more rounded so that the moving border is more realistic
							borderRadius: `calc(1.75rem* 0.96)`,
						}}
						// remove bg-white dark:bg-slate-900
						className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800">
						<div className="flex flex-col  lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-11">
							<img
								src={card.thumbnail}
								alt={card.thumbnail}
								className="lg:w-56 md:w-32 w-20"
							/>
							<div className="lg:ms-5">
								<h1 className="text-start text-xl md:text-2xl font-bold">
									{card.title}
								</h1>
								<p className="text-start text-white-100 mt-4 font-semibold">
									<ul>
										{card.desc &&
											card.desc.map((d, index) => (
												<li
													key={index}
													className="flex gap-1 align-center mt-[10px]">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 16 16"
														fill="currentColor"
														className="size-4">
														<path
															fillRule="evenodd"
															d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
															clipRule="evenodd"
														/>
													</svg>
													{d}
												</li>
											))}
									</ul>
								</p>
							</div>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
};

export default Experience;
