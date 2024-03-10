import { aref_ruqaa } from "@/utils/font";
import Image from "next/image";
import React from "react";

export default function About() {
	return (
		<section className="bg-white dark:bg-gray-900" id="#about">
			<div className="container max-w-[1200px] py-10 mx-auto">
				<div className="lg:-mx-6 lg:flex lg:items-center">
					<Image
						className="object-cover object-top lg:w-1/2 lg:mx-6 w-full h-96 lg:h-[36rem] "
						src="/img/about.png"
						alt=""
						width={580}
						height={570}
					/>

					<div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
						<p className="text-5xl font-semibold text-[#dfbf8a] ">“</p>

						<h1 className="text-2xl text-gray-800 dark:text-white lg:text-3xl lg:w-96 uppercase tracking-widest font-[100]">
							AboutMe
						</h1>
<h3
							className={`${aref_ruqaa.className} mt-6 text-2xl font-medium text-[#dbbc86]`}
						>
							Papuean.
						</h3>
						<p className={`${aref_ruqaa.className} text-lg max-w-lg mt-6 text-gray-500 dark:text-gray-400 `} >
							“ Age : 23 years ”
						</p>
						<p className={`${aref_ruqaa.className} text-lg max-w-lg mt-6 text-gray-500 dark:text-gray-400 `} >
							“ Height : 170cm ”
						</p>
						<p className={`${aref_ruqaa.className} text-lg max-w-lg mt-6 text-gray-500 dark:text-gray-400 `} >
							“ Weight : 50kg ”
						</p>

					</div>
				</div>
			</div>
		</section>
	);
}
