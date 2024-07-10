import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["developer", "designer", "creator", "innovator"];

const Typewriter = () => {
	const [index, setIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(200);

	useEffect(() => {
		let typewriterEffect = setTimeout(() => {
			handleTyping();
		}, typingSpeed);

		return () => clearTimeout(typewriterEffect);
	}, [displayedText, isDeleting]);

	const handleTyping = () => {
		const fullText = `${words[index]}`;
		setDisplayedText(
			isDeleting
				? fullText.substring(0, displayedText.length - 1)
				: fullText.substring(0, displayedText.length + 1)
		);

		if (!isDeleting && displayedText === fullText) {
			setIsDeleting(true);
			setTypingSpeed(100);
		} else if (isDeleting && displayedText === "") {
			setIsDeleting(false);
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
			setLoopNum(loopNum + 1);
			setTypingSpeed(200);
		}
	};

	return (
		<div className=" text-white ">
			<p className="md:tracking-wider mb-4 text-md md-text-lg lg:text-2xl">
				Hi, I&apos;m Lalason a {""}
				<motion.span
					key={loopNum}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="font-bold text-fuchsia-600 capitalize">
					{displayedText}
				</motion.span>
			</p>
		</div>
	);
};

export default Typewriter;
