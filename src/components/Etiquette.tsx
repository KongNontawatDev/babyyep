"use client";
import { aref_ruqaa } from "@/utils/font";
import React, { useEffect } from "react";
import AOS from "aos";
import ReactTypingEffect from "react-typing-effect";
export default function Etiquette({
	setIsOpenEtiquette,
}: {
	setIsOpenEtiquette: any;
}) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<section className="bg-white dark:bg-gray-900 z-10">
				<div className=" px-6 py-10 mx-auto">
					<h1
						data-aos="fade-up"
						className="text-2xl text-gray-800 lg:text-3xl dark:text-gray-600 uppercase tracking-widest font-[100]"
					>
						<ReactTypingEffect
							text={["Etiquette"]}
							eraseDelay={10000}
							speed={300}
							typingDelay={1000}
						/>
					</h1>

					<main className="relative z-10 w-full md:flex md:items-center mt-3">
						<div className="absolute w-full bg-[#FDF6E9] -z-10 md:h-96"></div>

						<div className="w-full p-6 bg-[#FDF6E9] md:flex md:items-center md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
							<center>
								<div data-aos="fade-right" className="max-w-lg">
									<video muted autoPlay loop style={{ width: "100%" }}>
										<source type="video/mp4" src="/img/video.mp4" />
									</video>
								</div>
							</center>

							<div className="mt-2 md:mx-6" data-aos="fade-left">
								<p
									className={`tracking-widest text-2xl font-medium uppercase  mt-4 text-gray-700 mb-2 `}
								>
									Etiquette
								</p>

								<p
									className={`${aref_ruqaa.className} text-xl font-medium  mt-4 leading-relaxed text-gray-600 mb-2 `}
								>
									FEE HANDLING : To prevent any awkward moments, please ensure
									you have the correct fee to present within the first 10
									minutes of meeting.
								</p>

								<p
									className={`${aref_ruqaa.className} text-xl font-medium  mt-4 leading-relaxed text-gray-600 mb-2`}
								>
									PERSONAL HYGIENE I am always freshly showered and well groomed
									and expect the same from you. I have shower facilities, mens
									toiletries and fresh fluffy towels you wish to freshen up at
									my place.
								</p>

								<div>
									<p
										className={`${aref_ruqaa.className} text-xl font-medium tracking-tight text-gray-600 mb-2`}
									>
										TIME KEEPING : You must let me know as soon as possible if
										you need to cancel your booking.
									</p>
								</div>
								<span
									className="read-more-button"
									onClick={() => setIsOpenEtiquette(true)}
								>
									Read More...
								</span>
							</div>
						</div>
					</main>
				</div>
			</section>
		</>
	);
}
