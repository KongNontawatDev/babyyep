import { aref_ruqaa } from "@/utils/font";
import { Disclosure } from "@headlessui/react";
import { ChevronUp } from "react-feather";

export default function FAQ() {
	return (
		<div className="container max-w-[1200px] bg-white py-10"  id="#faq">
			<h1 className="text-2xl text-center text-gray-800 lg:text-3xl dark:text-white uppercase tracking-widest font-[100]">
				FAQ
			</h1>

			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between bg-[#FDF6E9] px-4 py-3 text-left font-medium text-black hover:bg-[#e2d5b9] focus:outline-none focus-visible:ring focus-visible:ring-[#e2d5b9]">
							<span className={`${aref_ruqaa.className} `}>
								WHAT DAYS DO YOU WORK AND WHAT TIMES ARE YOU AVAILABLE UNTIL?
							</span>
							<ChevronUp
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel
							className={`${aref_ruqaa.className} bg-[#fffbf5] px-4 pb-2 pt-4  text-gray-500`}
						>
							: My dates, will always be at the top of my profile on How To Book.
							My availability varies week to week so please keep checking. I
							respond fastest by phone call and text.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between bg-[#FDF6E9] px-4 py-3 text-left font-medium text-black hover:bg-[#e2d5b9] focus:outline-none focus-visible:ring focus-visible:ring-[#e2d5b9]">
							<span className={`${aref_ruqaa.className} `}>
								CAN I REQUEST YOU WEAR SOMETHING DO YOUR HAIR A CERTAIN WAY OR
								WEAR SPECIFIC MAKEUP ?
							</span>
							<ChevronUp
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel
							className={`${aref_ruqaa.className} bg-[#fffbf5] px-4 pb-2 pt-4  text-gray-500`}
						>
							: I always dress in luxury lingerie and louboutins or a cocktail
							dress with louboutins. If you have something more particular in
							mind feel free to ask, however as I travel in to work I do only
							have what I have packed for the day. If you would like to book
							ahead and ask for something more particular then sure thing! I am
							a size 8-10 if you wanted to bring something along for me to wear
							also.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between bg-[#FDF6E9] px-4 py-3 text-left font-medium text-black hover:bg-[#e2d5b9] focus:outline-none focus-visible:ring focus-visible:ring-[#e2d5b9]">
							<span className={`${aref_ruqaa.className} `}>ARE YOU DISCREET ?</span>
							<ChevronUp
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel
							className={`${aref_ruqaa.className} bg-[#fffbf5] px-4 pb-2 pt-4  text-gray-500`}
						>
							: When you choose to spend time with me you also gain my
respect and that includes me respecting your privacy. We all
have lives outside of this. And it's important that is valued. <br/>
I won't contact you outside of our time together, and everything
that happens between us in my four walls is kept between us. I
am professional, discreet, and respectful. <br/>
I always ask for the same in return.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between bg-[#FDF6E9] px-4 py-3 text-left font-medium text-black hover:bg-[#e2d5b9] focus:outline-none focus-visible:ring focus-visible:ring-[#e2d5b9]">
							<span className={`${aref_ruqaa.className} `}>DO YO OFFER BAREBACK ?</span>
							<ChevronUp
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel
							className={`${aref_ruqaa.className} bg-[#fffbf5] px-4 pb-2 pt-4  text-gray-500`}
						>
							: NO !, I value my health, my other clients health and
anybody that asks will be blocked.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between bg-[#FDF6E9] px-4 py-3 text-left font-medium text-black hover:bg-[#e2d5b9] focus:outline-none focus-visible:ring focus-visible:ring-[#e2d5b9]">
							<span className={`${aref_ruqaa.className} `}>CAN I TAKE YOU OUT ON DATE ?</span>
							<ChevronUp
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel
							className={`${aref_ruqaa.className} bg-[#fffbf5] px-4 pb-2 pt-4  text-gray-500`}
						>
							: You are more than welcome to book some time for us to get
to know each other over a breakfast, lunch or dinner date etc
but please note that I only see gentlemen under work
circumstances. Donation amount will remain the same.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between bg-[#FDF6E9] px-4 py-3 text-left font-medium text-black hover:bg-[#e2d5b9] focus:outline-none focus-visible:ring focus-visible:ring-[#e2d5b9]">
							<span className={`${aref_ruqaa.className} `}>WHAT SERVICES DO YOU PROVIDE ?</span>
							<ChevronUp
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel
							className={`${aref_ruqaa.className} bg-[#fffbf5] px-4 pb-2 pt-4  text-gray-500`}
						>: I provide the services which are on my likes list as long as
you are hygienic.</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between bg-[#FDF6E9] px-4 py-3 text-left font-medium text-black hover:bg-[#e2d5b9] focus:outline-none focus-visible:ring focus-visible:ring-[#e2d5b9]">
							<span className={`${aref_ruqaa.className} `}>CAN YOU DO A DISCOUNT ?</span>
							<ChevronUp
								className={`${
									open ? "rotate-180 transform" : ""
								} h-5 w-5 text-black`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel
							className={`${aref_ruqaa.className} bg-[#fffbf5] px-4 pb-2 pt-4  text-gray-500`}
						>
							: No, my prices are fair and my service is excellent. My
excellent feedback is reference to this.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
}
