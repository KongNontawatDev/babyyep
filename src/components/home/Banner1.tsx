"use client";
import { aref_ruqaa } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import ReactTypingEffect from 'react-typing-effect';
export default function Banner1() {

	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<div className="w-full h-[calc(100vh-72px)] " style={{background:"url('/img/bg1.png') no-repeat right top",backgroundSize:'100vw 100vh'}}>
			<div className="container max-w-[1200px] mx-auto pt-8">
				<div className="items-center lg:flex">
					<div data-aos="fade-right" className="w-full lg:w-2/3" >
						<div className="lg:max-w-2xl">
							<h1 
								className="text-3xl lg:text-6xl text-gray-800 dark:text-whiteuppercase tracking-widest font-[100] uppercase text-center lg:text-start"
								style={{fontWeight:100}}
							>
								Baby
							</h1>

							<p
								className={`${aref_ruqaa.className} text-lg mt-3 text-gray-600 dark:text-gray-400  text-center lg:text-start`}
							>
								I'll be the real-life porn star you want. Call me baby
							</p>

							<Link href={'https://wa.me/message/2BCUIWKERU3DP1'}>
								<button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-black uppercase transition-colors duration-300 transform bg-[#E3C797] lg:w-auto hover:bg-[#E3C797] focus:outline-none focus:bg-[#E3C797]">
								Contact ME
							</button>
							</Link>
							
						</div>
					</div>

					<div data-aos="fade-left" className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/3 h-[calc(100vh-72px)]">
						<Image
							className="h-full  object-cover"
							src="/img/banner1.png"
							alt="Catalogue-pana.svg"
							width={390}
							height={840}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
