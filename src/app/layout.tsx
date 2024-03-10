'use client'
import type { Metadata } from "next";
import { Aref_Ruqaa, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const aref_ruqaa = Aref_Ruqaa({ weight: "400", subsets: ["latin"] });
export const roboto = Roboto({weight:"300",subsets:["latin"]});



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
