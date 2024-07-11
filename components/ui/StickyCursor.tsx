"use client";
import React, { use, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = () => {
	const cursorSize = 20;
	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = { damping: 30, stiffness: 400, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const manageMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		mouse.x.set(clientX - cursorSize / 2);
		mouse.y.set(clientY - cursorSize / 2);
	};

	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMove);
		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
		};
	});

	return (
		<motion.div
			className="bg-white-200 w-4 h-4 rounded-full fixed z-50 pointer-events-none"
			style={{ left: smoothMouse.x, top: smoothMouse.y }}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.3 }}></motion.div>
	);
};

export default StickyCursor;
