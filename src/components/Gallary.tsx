"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import ReactTypingEffect from "react-typing-effect";
export default function Gallary({setIsOpenGallary}:{setIsOpenGallary:any}) {
		useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<section className="bg-white dark:bg-gray-900" id="#gallary">
			<div className="container max-w-[1200px] py-10 mx-auto">
				<h1 data-aos="fade-up" className="text-2xl text-center text-gray-800 lg:text-3xl dark:text-white uppercase tracking-widest font-[100]">
												<ReactTypingEffect
							text={["Gallary"]}
							eraseDelay={10000}
							speed={300}
							typingDelay={1000}
						/>
					
				</h1>

				{/* <p data-aos="fade-up"
					className={`${aref_ruqaa.className} mt-4 text-center text-gray-500 dark:text-gray-300`}
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
					voluptatibus
				</p> */}

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
					<center>
						<Image data-aos="fade-right" src={"/img/gallary1.png"} alt="" width={350} height={380} className="max-h-[380px] object-cover object-top" />
					</center>

					<center>
						<Image data-aos="fade-down" src={"/img/gallary2.png"} alt="" width={350} height={380} className="max-h-[380px] object-cover object-top" />
					</center>

					<center>
						<Image data-aos="fade-left" src={"/img/gallary3.png"} alt="" width={350} height={380} className="max-h-[380px] object-cover object-top" />
					</center>
				</div>

				<div data-aos="fade-up" className="mt-4">
					<button
						type="button"
						className="inline-flex w-full justify-center align-middle bg-white px-4 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
						onClick={() => setIsOpenGallary(true)}
					>
						See More...
					</button>
				</div>
			</div>
		</section>
	);
}
