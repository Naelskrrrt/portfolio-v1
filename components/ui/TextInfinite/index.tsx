"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";

const TextInfiniteScrolling = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(slider.current, {
			xPercent: -100,
			ease: "none",
			duration: 20, // Augmenter la vitesse en réduisant la durée
			repeat: -1,
			modifiers: {
				xPercent: gsap.utils.wrap(-100, 0),
			},
		});

		ScrollTrigger.create({
			trigger: document.documentElement,
			start: "top top",
			end: "bottom bottom",
			scrub: true,
			onUpdate: (self) => {
				gsap.to(slider.current, {
					xPercent: -100 * self.progress,
					ease: "none",
					duration: 10, // Augmenter la vitesse en réduisant la durée
					repeat: -1,
					modifiers: {
						xPercent: gsap.utils.wrap(-100, 0),
					},
				});
			},
		});
	}, []);

	return (
		<div className={styles.sliderContainer}>
			<div ref={slider} className={styles.slider}>
				<p ref={firstText} className={styles.text}>
					{" "}
					Creative Designer - Creative Developer - Creative Thinker -
					Creative Designer - Creative Developer
				</p>
				<p ref={secondText} className={styles.text}>
					{" "}
					Creative Designer - Creative Developer
				</p>
			</div>
		</div>
	);
};

export default TextInfiniteScrolling;
