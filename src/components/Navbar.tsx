"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Phone } from "react-feather";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const menuClasses = isOpen
		? "translate-x-0 opacity-100"
		: "opacity-0 -translate-x-full";
	return (
		<nav className="relative bg-transparent dark:bg-gray-800" id="home">
			<div className="container max-w-[1200px] px-6 md:px-0 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<a href="#">
						<Image
							className="w-auto h-9 sm:h-10"
							src="/img/logo.png"
							alt="logo"
							width={75}
							height={75}
						/>
					</a>

					<div className="flex lg:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
							aria-label="toggle menu"
						>
							{isOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 8h16M4 16h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				<div
					className={`${menuClasses} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
				>
					<div className="flex flex-col md:flex-row md:mx-6 ">
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#E3C797] dark:hover:text-[#E3C797] md:mx-4 md:my-0"
							href="#home"
						>
							Home
						</a>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#E3C797] dark:hover:text-[#E3C797] md:mx-4 md:my-0"
							href="#about"
						>
							About
						</a>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#E3C797] dark:hover:text-[#E3C797] md:mx-4 md:my-0"
							href="#service"
						>
							Service
						</a>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-[#E3C797] dark:hover:text-[#E3C797] md:mx-4 md:my-0"
							href="#contact"
						>
							Contact
						</a>
					</div>
					<Link href={"https://wa.me/message/2BCUIWKERU3DP1"}>
						<button
							type="button"
							className="inline-flex w-full justify-center align-middle bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
						>
							<Image
								src={"/img/whatsapp.png"}
								alt="sms icon"
								width={20}
								height={20}
								className="me-1"
							/>
							WhatsApp
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
