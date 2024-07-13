"use client";

import React, { useEffect } from "react";
import {
	SpringOptions,
	motion,
	animate,
	transform,
	useMotionValue,
	useSpring,
} from "framer-motion";

const SPRING_OPTIONS: SpringOptions = {
	damping: 20,
	stiffness: 300,
	mass: 0.5,
};

const SHADOW_SIZE = 20;
const SHADOW_SIZE_ON_HOVER = 50;

export default function StickyCursor() {
	const [isHovered, setIsHovered] = React.useState(false);

	useEffect(() => {
		const manageMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;

			// animate pointer
			mouse.x.set(clientX);
			mouse.y.set(clientY);

			// animate pointerShadow
			if (isHovered) {
				pointerShadow.x.set(clientX);
				pointerShadow.y.set(clientY);
				pointerShadowScale.x.set(1.2);
				pointerShadowScale.y.set(1.2);
			} else {
				pointerShadow.x.set(clientX);
				pointerShadow.y.set(clientY);
				pointerShadowScale.x.set(1);
				pointerShadowScale.y.set(1);
			}
		};

		const manageMouseEnter = (e: MouseEvent) => {
			const target = e.target as HTMLDivElement;
			// target.classList.add("invert-colors");
			setIsHovered(true);
		};

		const manageMouseLeave = (e: MouseEvent) => {
			const target = e.target as HTMLDivElement;
			setIsHovered(false);
			// target.classList.remove("invert-colors");
		};

		window.addEventListener("mousemove", manageMouseMove);
		document
			.querySelectorAll<HTMLDivElement>("[data-sticky]")
			.forEach((el) => {
				el.addEventListener("mouseenter", manageMouseEnter);
				el.addEventListener("mouseleave", manageMouseLeave);
			});

		// document.body.style.setProperty("cursor", "none");

		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
			document
				.querySelectorAll<HTMLDivElement>("[data-sticky]")
				.forEach((el) => {
					el.removeEventListener("mouseenter", manageMouseEnter);
					el.removeEventListener("mouseleave", manageMouseLeave);
				});
			document.body.style.setProperty("cursor", null);
		};
	}, [isHovered]);

	const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
	const pointerShadow = { x: useMotionValue(0), y: useMotionValue(0) };
	const pointerShadowScale = { x: useMotionValue(1), y: useMotionValue(1) };
	const smoothPointerShadow = {
		x: useSpring(pointerShadow.x, SPRING_OPTIONS),
		y: useSpring(pointerShadow.y, SPRING_OPTIONS),
	};

	const cursorSize = isHovered ? SHADOW_SIZE_ON_HOVER : SHADOW_SIZE;

	return (
		<>
			<motion.div
				transformTemplate={({
					translateX,
					translateY,
					scaleX,
					scaleY,
				}) =>
					`translateX(${translateX}) translateY(${translateY}) scaleX(${scaleX}) scaleY(${scaleY})`
				}
				style={{
					zIndex: 9999,
					left: smoothPointerShadow.x,
					top: smoothPointerShadow.y,
					translateX: "-50%",
					translateY: "-50%",
					scaleX: pointerShadowScale.x,
					scaleY: pointerShadowScale.y,
				}}
				className="w-10 h-10 fixed top-0 left-0 bg-white mix-blend-difference rounded-full pointer-events-none will-change-transform transition-transform duration-200 ease-in-out"
				animate={{
					width: cursorSize,
					height: cursorSize,
				}}
			/>

			{/* <motion.div
				style={{ left: mouse.x, top: mouse.y, zIndex: 100000 }}
				className="w-2 h-2 fixed bg-white border-black -translate-x-1/2 -translate-y-1/2 border rounded-full pointer-events-none"
			/> */}
		</>
	);
}
