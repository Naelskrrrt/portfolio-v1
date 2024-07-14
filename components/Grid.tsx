import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { GRID_ITEMS } from "@/data";
import { motion } from "framer-motion";

const Grid = () => {
	return (
		<section id="about" className="mt-20  relative">
			<BentoGrid className="relative">
				{GRID_ITEMS.map(
					(
						{
							id,
							title,
							description,
							className,
							img,
							imgClassName,
							titleClassName,
							spareImg,
						},
						i
					) => (
						<BentoGridItem
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							index={i}
							img={img}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};

export default Grid;
