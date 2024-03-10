import { aref_ruqaa } from "@/app/layout";
import React from "react";
import ReadMoreReact from "read-more-react";
import { Disclosure } from "@headlessui/react";
import CheckboxIcon from "./icon/checkbox";
import Image from "next/image";

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

export default function Service({setIsOpenServince}:{setIsOpenServince:any}) {
	return (
		<div
			className="container max-w-[1200px] flex flex-col py-10 mx-auto space-y-6 lg:h-[32rem] lg:flex-row lg:items-center"
			id="#service"
		>
			<div className="w-full lg:w-1/2">
				<div className="lg:max-w-lg">
					<h1 className="text-3xl text-gray-800 dark:text-white lg:text-4xl uppercase tracking-widest font-[100]">
						Services
					</h1>

					<p
						className={`${aref_ruqaa.className} mx-auto  text-gray-500 dark:text-gray-300`}
					>
						Duration 60 mins (1hr.) or 30 mins{" "}
						<span className="read-more-button" onClick={()=>setIsOpenServince(true)}>Read More...</span>
					</p>

					<h3 className=" mt-2 text-gray-800 dark:text-white lg:text-lg uppercase tracking-widest font-[100]">
						Service List/ Extra services for the package
					</h3>

					<div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 w-full">
						<div className="">
							{items.map((item: { title: string; detail: string }) => (
								<Disclosure key={item.title}>
									<Disclosure.Button
										className={`${aref_ruqaa.className} mx-3 py-2 flex`}
									>
										<CheckboxIcon />
										<span className="ms-1">{item.title} <span className="read-more-button">Read More...</span></span>
									</Disclosure.Button>
									<Disclosure.Panel
										className={`${aref_ruqaa.className} text-gray-500 -mt-2`}
									>
										{item.detail}
									</Disclosure.Panel>
								</Disclosure>
							))}
						</div>
					</div>
				</div>
			</div>

				<Image
					className="object-cover object-top lg:w-1/2 lg:mx-6 w-full h-96 lg:h-[36rem]"
					src="/img/service.png"
					alt="glasses photo"
					width={570}
					height={580}
				/>
		</div>
	);
}
