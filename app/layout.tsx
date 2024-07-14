import type { Metadata } from "next";
import { Inter, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StickyCursor from "@/components/ui/StickyCursor";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lalason Annael - Portfolio",
	description:
		"Welcome to my portfolio! I'm a full-stack developer && a creative ui/ux designer based in Madagascar.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(dmSans.className)}>
				{" "}
				<StickyCursor />
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
