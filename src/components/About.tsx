'use client'
import { aref_ruqaa } from "@/utils/font";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import ReactTypingEffect from "react-typing-effect";
export default function About() {
		useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<section className="bg-white dark:bg-gray-900" id="about">
			<div className="container max-w-[1200px] py-10 mx-auto">
				<div  className="lg:-mx-6 lg:flex lg:items-center">
					<Image
						className="object-cover object-top lg:w-1/2 lg:mx-6 w-full h-96 lg:h-[36rem] "
						src="/img/about.png"
						alt=""
						width={580}
						height={570}
						data-aos="fade-up"
					/>

					<div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0" data-aos="fade-down">
						<p className="text-5xl font-semibold text-[#dfbf8a] ">“</p>

						<h1 className="text-2xl text-gray-800 dark:text-white lg:text-3xl lg:w-96 uppercase tracking-widest font-[100]">
							<ReactTypingEffect
							text={["ABOUT BABY."]}
							eraseDelay={10000}
							speed={300}
							typingDelay={1000}
						/>
						</h1>
												<p className={`${aref_ruqaa.className} text-lg max-w-lg mt-4 text-gray-500 dark:text-gray-400 `} >
												I'm Cartier TS, I am a 100% independent
and experienced high end escort.
						</p>
<h3
							className={`${aref_ruqaa.className} mt-6 text-2xl font-medium text-[#dbbc86]`}
						>
							Physical
						</h3>
						<p className={`${aref_ruqaa.className} text-lg max-w-lg mt-4 text-gray-500 dark:text-gray-400 `} >
						Sexy Asia bombshell ... I have luxurious long
brown hair, baby soft skin, mesmerising
eyes, perfect manicured nails & feet. I am a
dress size 8 with a peachy bum and big
boobs (every mans dream) and soft lips
which love to be passionately kissed. I love
tight dresses, lingerie and wearing my
louboutins
						</p>


					</div>
				</div>
			</div>
		</section>
	);
}
