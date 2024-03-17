"use client";
import { aref_ruqaa } from "@/utils/font";
import React, { useEffect } from "react";
import { Instagram, MessageSquare, Send } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import AOS from "aos";
import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";
export default function Footer() {
	const router = useRouter();
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);
	return (
		<>
			<section className="bg-white dark:bg-gray-900" id="contact">
				<div className="container max-w-[1200px] py-10 mx-auto">
					<div data-aos="fade-up" className="text-center">
						<h1 className="mt-2 text-2xl text-gray-800 md:text-3xl dark:text-white uppercase tracking-widest font-[100]">
							<ReactTypingEffect
								text={["Contact us"]}
								eraseDelay={10000}
								speed={300}
								typingDelay={1000}
							/>
						</h1>

						<p
							className={`${aref_ruqaa.className} mt-3 text-gray-500 dark:text-gray-400`}
						>
							Book via whatspp chat or sms.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
						<div
							onClick={() =>
								router.push("https://wa.me/message/2BCUIWKERU3DP1")
							}
							className="flex flex-col items-center justify-center text-center border p-3 shadow-sm rounded-lg hover:bg-[#FDF6E9] active:bg-[#FDF6E9]"
						>
							<center>
								<Image
									src={"/img/whatsapp.png"}
									alt="sms icon"
									width={40}
									height={40}
								/>
							</center>

							<h2
								className={`${aref_ruqaa.className} mt-4 text-lg font-medium text-gray-800 dark:text-white`}
							>
								⭐WhatsApp
							</h2>
							<p
								className={`${aref_ruqaa.className} mt-2 text-gray-500 dark:text-gray-400`}
							>
								Click to start chatting with me on whatsapp.
							</p>
							<p
								className={`${aref_ruqaa.className} mt-2 text-gray-700 dark:text-blue-400`}
							>
								A
							</p>
						</div>

						<CopyToClipboard
							text="+44 7926 627778"
							onCopy={() =>
								toast("Copy SMS Tel to Clipboard!!", {
									position: "bottom-center",
									hideProgressBar: true,
									autoClose: 1000,
								})
							}
						>
							<div className="flex flex-col items-center justify-center text-center  border p-3 shadow-sm rounded-lg hover:bg-[#FDF6E9] active:bg-[#FDF6E9]">
								<center>
									<Image
										src={"/img/sms.png"}
										alt="sms icon"
										width={40}
										height={40}
									/>
								</center>

								<h2
									className={`${aref_ruqaa.className} mt-4 text-lg font-medium text-gray-800 dark:text-white`}
								>
									SMS
								</h2>
								<p
									className={`${aref_ruqaa.className} mt-2 text-gray-500 dark:text-gray-400`}
								>
									Click to copy SMS number to the clipboard.
								</p>
								<p
									className={`${aref_ruqaa.className} mt-2 text-gray-700 dark:text-blue-400`}
								>
									+44 7926 627778
								</p>
							</div>
						</CopyToClipboard>
					</div>
				</div>
			</section>

			<footer className="bg-gradient-to-r from-[#FDF6E9] to-[#E1D7C1]">
				<div className="container max-w-[1200px] py-4 mx-auto">
					© 2024{" "}
					<a
						href="https://www.facebook.com/kongnontawat.dev"
						className="underline"
						target="_blank"
					>
						Kong Nontawat.
					</a>{" "}
					All rights reserved.
				</div>
			</footer>
		</>
	);
}
