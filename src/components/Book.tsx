"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import ReactTypingEffect from "react-typing-effect";

export default function Book({ setIsOpenBook }: { setIsOpenBook: any }) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<div
				className="w-full bg-center bg-cover h-[28rem]"
				style={{
					background: "url('/img/bg_book.png') no-repeat center top",
					backgroundSize: "100%",
				}}
			>
				<div className="flex items-center justify-center w-full h-full bg-gray-900/40">
					<div className="text-center" data-aos="fade-up">
						<h1 className="text-3xl font-semibold text-white lg:text-4xl uppercase tracking-widest">
							<ReactTypingEffect
								text={["How to"]}
								eraseDelay={10000}
								speed={300}
								typingDelay={1000}
							/>
							<span className="text-[#dbc6a0]">
								{" "}
								<ReactTypingEffect
									text={["Book"]}
									eraseDelay={10000}
									speed={300}
									typingDelay={1000}
								/>
							</span>
						</h1>
						<button
							onClick={() => setIsOpenBook(true)}
							className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-black uppercase transition-colors duration-300 transform bg-[#E3C797] lg:w-auto hover:bg-[#E3C797] focus:outline-none focus:bg-[#E3C797]"
						>
							Read More...
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
