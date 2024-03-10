'use client'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { roboto } from "@/utils/font";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className}`}
				x-data={{ open: true, darkMode: false }}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
