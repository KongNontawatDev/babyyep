"use client";
import { aref_ruqaa } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
export default function Banner3() {
		useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<div className="w-full h-[calc(100vh-72px)] bg-gradient-to-r from-[#FDF6E9] to-[#E1D7C1]">
			<div className="container max-w-[1200px] mx-auto  pt-8">
				<div className="items-center lg:flex">
					<div data-aos="fade-right" className="w-full lg:w-1/2">
						<div className="lg:max-w-2xl">
							<h1
								className={`text-2xl lg:text-6xl text-gray-800 dark:text-white tracking-widest uppercase text-center lg:text-start`}
								style={{ fontWeight: 100 }}
							>
								You Happy
							</h1>

							<p
								className={`${aref_ruqaa.className} text-lg mt-3 text-gray-600 dark:text-gray-400  text-center lg:text-start`}
							>
								With your hours purchase we provide the best experience with the best of our ability.
							</p>

							<Link href={"https://wa.me/message/2BCUIWKERU3DP1"}>
								<button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-black uppercase transition-colors duration-300 transform bg-[#E3C797] lg:w-auto hover:bg-[#E3C797] focus:outline-none focus:bg-[#E3C797]">
									Contact ME
								</button>
							</Link>
						</div>
					</div>

					<div data-aos="fade-left" className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 h-[calc(100vh-72px)]">
						<Image
							className="h-full  object-cover"
							src="/img/banner2.png"
							alt="Catalogue-pana.svg"
							width={486}
							height={840}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
