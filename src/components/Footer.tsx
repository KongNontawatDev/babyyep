import { aref_ruqaa } from "@/app/layout";
import React from "react";
import { Instagram, MessageSquare, Send } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
export default function Footer() {
	const router = useRouter();

	return (
		<>
			<section className="bg-white dark:bg-gray-900" id="#contact">
				<div className="container max-w-[1200px] py-10 mx-auto">
					<div className="text-center">
						<p
							className={`${aref_ruqaa.className} text-[#ddbf8c] uppercase tracking-widest font-[100]`}
						>
							Contact us
						</p>

						<h1 className="mt-2 text-2xl text-gray-800 md:text-3xl dark:text-white uppercase tracking-widest font-[100]">
							How To Book?
						</h1>

						<p
							className={`${aref_ruqaa.className} mt-3 text-gray-500 dark:text-gray-400`}
						>
							Our friendly team is always here to chat.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
						<div onClick={()=>router.push('https://wa.me/message/2BCUIWKERU3DP1')} className="flex flex-col items-center justify-center text-center border p-3 shadow-sm rounded-lg hover:bg-[#FDF6E9] active:bg-[#FDF6E9]">
							<span className="p-3 text-gray-700 rounded-full bg-[#FDF6E9] dark:bg-gray-800">
								<MessageSquare />
							</span>

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
							text="Hello!"
							onCopy={() =>
								toast("Copy SMS Tel to Clipboard!!", {
									position: "bottom-center",
									hideProgressBar: true,
									autoClose: 1000,
								})
							}
						>
							<div className="flex flex-col items-center justify-center text-center  border p-3 shadow-sm rounded-lg hover:bg-[#FDF6E9] active:bg-[#FDF6E9]">
								<span className="p-3 text-gray-700 rounded-full bg-[#FDF6E9] dark:bg-gray-800">
									<Send />
								</span>

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
									0xx-xxx-xxxx
								</p>
							</div>
						</CopyToClipboard>

						<div  onClick={()=>router.push('https://wa.me/message/2BCUIWKERU3DP1')}  className="flex flex-col items-center justify-center text-center  border p-3 shadow-sm rounded-lg hover:bg-[#FDF6E9] active:bg-[#FDF6E9]">
								<span className="p-3 text-gray-700 rounded-full bg-[#FDF6E9] dark:bg-gray-800">
									<Instagram />
								</span>

								<h2
									className={`${aref_ruqaa.className} mt-4 text-lg font-medium text-gray-800 dark:text-white`}
								>
									Follow IG
								</h2>
								<p
									className={`${aref_ruqaa.className} mt-2 text-gray-500 dark:text-gray-400`}
								>
									Click to follow me on IG.
								</p>
								<p
									className={`${aref_ruqaa.className} mt-2 text-gray-700 dark:text-blue-400`}
								>
									<a href="">A</a>
								</p>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-gradient-to-r from-[#FDF6E9] to-[#E1D7C1]">
				<div className="container max-w-[1200px] py-4 mx-auto">
					© 2024{" "}
					<a href="" className="underline">
						Kong Nontawat.
					</a>{" "}
					All rights reserved.
				</div>
			</footer>
		</>
	);
}
