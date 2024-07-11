"use client";
import Hero from "@/components/Hero";
import StickyCursor from "@/components/ui/StickyCursor";
import { useRef } from "react";

export default function Home() {
	const stickyElement = useRef(null);

	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<StickyCursor stickyElement={stickyElement} />

			<div className="max-w-7xl w-full">
				<Hero ref={stickyElement} />
			</div>
		</main>
	);
}
