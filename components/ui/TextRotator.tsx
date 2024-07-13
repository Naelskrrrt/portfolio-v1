import React from "react";

function TextRotator() {
	return (
		<div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
			<div
				data-sticky
				className="md:tracking-wider mb-4 text-md md-text-lg lg:text-xl">
				<span>I am a Designer, Developer and a</span>
				<span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))]  overflow-hidden">
					<ul className="block font-bold text-left font-rubik text-lg  leading-tight [&_li]:block animate-text-slide">
						<li className="text-fuchsia-600">Contributer</li>
						<li className="text-fuchsia-600">Creator</li>
						<li className="text-fuchsia-600">Student</li>
						<li className="text-fuchsia-600">Music Lover</li>
						<li className="text-fuchsia-600">Gamer</li>
						<li className="text-fuchsia-600">Basketball Player</li>
					</ul>
				</span>
			</div>
		</div>
	);
}

export default TextRotator;
