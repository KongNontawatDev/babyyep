import { aref_ruqaa } from "@/utils/font";
import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import CheckboxIcon from "./icon/checkbox";
import Image from "next/image";
import AOS from "aos";
import ReactTypingEffect from "react-typing-effect";
import { ChevronRight, Minus } from "react-feather";
const items = [
	{
		title: "Full Girlfriend Experience",
		detail: "I offer a sensual girlfriend experience",
	},
	{
		title: "French Kissing",
		detail:
			"I adore passionate french kissing, oral hygiene is paramount, I will always have minty fresh breath for your arrival, please ensure you do the same.",
	},
	{
		title: "OWO",
		detail:
			"Please make sure you are freshly showered and immaculately clean. Because I like to suck deep.",
	},
	{
		title: "Protected Sex",
		detail:
			"Sex is always protected, I respect and value my health and so should you.",
	},
	{ title: "Cum", detail: "I can do whatever you want baby." },
	{
		title: "Fetish's & Kinks",
		detail:
			"Domination - SPH - Fin Dom - Foot Fetish & Many More I Am Told I Am The Perfect Goddess To Worship",
	},
	{
		title: "Rimming",
		detail:
			"Please make sure you are freshly showered and immaculately clean.  I can lick ass for you. That's so cheesy!",
	},
];

export default function Service({
	setIsOpenServince,
}: {
	setIsOpenServince: any;
}) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<div
			className="container max-w-[1200px] flex flex-col py-10 mx-auto space-y-6 lg:h-[32rem] lg:flex-row lg:items-center"
			id="service"
		>
			<div className="w-full lg:w-1/2">
				<div className="lg:max-w-lg">
					<h1
						data-aos="fade-up"
						className="text-3xl text-gray-800 dark:text-white lg:text-4xl uppercase tracking-widest font-[100]"
					>
						<ReactTypingEffect
							text={["Services"]}
							eraseDelay={10000}
							speed={300}
							typingDelay={1000}
						/>
					</h1>

					<p
						data-aos="fade-right"
						className={`${aref_ruqaa.className} mx-auto  text-gray-500 dark:text-gray-300`}
					>
						Duration 60 mins (1hr.) or 30 mins{" "}
						<span
							className="read-more-button"
							onClick={() => setIsOpenServince(true)}
						>
							Read More...
						</span>
					</p>

					<h3
						data-aos="fade-right"
						className=" mt-2 text-gray-800 dark:text-white lg:text-lg uppercase tracking-widest font-[100]"
					>
						Service List/ Extra services for the package
					</h3>

					<div
						data-aos="fade-right"
						className="flex items-center text-gray-800 -px-3 dark:text-gray-200 w-full"
					>
						<div className="w-full">
							{items.map((item: { title: string; detail: string }) => (
								<Disclosure key={item.title}>
									{({ open }) => (
										<>
											<Disclosure.Button
												className={`${aref_ruqaa.className} mx-3 py-2 flex w-full align-middle justify-center`}
											>
												<Minus size={15} className="mt-1.5"/>
												<span className="w-full ms-1 flex justify-between align-middle">
													{item.title}
													{/* <span className="read-more-button" style={{fontSize:12}}>Read More...</span> */}
													<ChevronRight
														className={open ? "text-gray-500 rotate-90 transform" : "text-gray-500"}
													/>
												</span>
											</Disclosure.Button>
											<Disclosure.Panel
												className={`${aref_ruqaa.className} text-gray-500 -mt-2`}
											>
												{item.detail}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							))}
						</div>
					</div>
				</div>
			</div>

			<Image
				data-aos="fade-left"
				className="object-cover object-top lg:w-1/2 lg:mx-6 w-full h-96 lg:h-[36rem]"
				src="/img/service.png"
				alt="glasses photo"
				width={570}
				height={580}
			/>
		</div>
	);
}
