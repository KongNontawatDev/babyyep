"use client";
import Carousel from "nuka-carousel";
import Banner1 from "@/components/home/Banner1";
import Banner2 from "@/components/home/Banner2";
import Gallary from "../components/Gallary";
import {
	renderCenterLeftControls,
	renderCenterRightControls,
} from "@/components/home/controls";
import About from "@/components/About";
import Service from "@/components/Service";
import FAQ from "@/components/FAQ";
import Etiquette from "@/components/Etiquette";
import Review from "@/components/Review";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import Banner3 from "@/components/home/Banner3";
import { aref_ruqaa } from "@/utils/font";
import Book from "@/components/Book";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Phone } from "react-feather";
export default function Home() {
	let [isOpenEtiquette, setIsOpenEtiquette] = useState(false);
	let [isOpenService, setIsOpenService] = useState(false);
	let [isOpenGallary, setIsOpenGallary] = useState(false);
	let [isOpenBook, setIsOpenBook] = useState(false);

	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<>
			<ToastContainer />
			{/* Banner */}
			<Carousel
				// autoplay
				renderCenterLeftControls={renderCenterLeftControls}
				renderCenterRightControls={renderCenterRightControls}
			>
				<Banner1 />
				<Banner2 />
				<Banner3 />
			</Carousel>

			<Gallary setIsOpenGallary={setIsOpenGallary} />
			<Transition appear show={isOpenGallary} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-20"
					onClose={() => setIsOpenGallary(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-6xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-xl text-gray-800 dark:text-gray-600 uppercase tracking-widest font-[100]"
									>
										Gallary
									</Dialog.Title>

									<div className="grid grid-cols-1 gap-8 mt-2 xl:mt-6 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 ">
										<center>
											<Image
												src={"/img/gallary1.png"}
												alt=""
												width={350}
												height={380}
											/>
										</center>

										<center>
											<Image
												src={"/img/gallary2.png"}
												alt=""
												width={350}
												height={380}
											/>
										</center>

										<center>
											<Image
												src={"/img/gallary3.png"}
												alt=""
												width={350}
												height={380}
											/>
										</center>
										<center>
											<Image
												src={"/img/gallary4.png"}
												alt=""
												width={350}
												height={380}
											/>
										</center>

										<center>
											<Image
												src={"/img/gallary5.png"}
												alt=""
												width={350}
												height={380}
											/>
										</center>

										<center>
											<Image
												src={"/img/gallary6.png"}
												alt=""
												width={350}
												height={380}
											/>
										</center>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex w-full justify-center align-middle bg-white px-4 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
											onClick={() => setIsOpenGallary(false)}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<About />

			<Service setIsOpenServince={setIsOpenService} />
			<Transition appear show={isOpenService} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-20"
					onClose={() => setIsOpenService(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-xl text-gray-800 dark:text-gray-600 uppercase tracking-widest font-[100]"
									>
										Servinces
									</Dialog.Title>
									<div className="mt-2">
										<p
											className={`${aref_ruqaa.className} text-lg  text-gray-700 text-center`}
										>
											Work Session
										</p>
									</div>

									<p className={`${aref_ruqaa.className}  text-gray-500 mb-3`}>
										Duration 60 mins (1hr.) or 30 mins
									</p>
									<p className={`${aref_ruqaa.className}  text-gray-500 mb-3`}>
										I can do offer dress up sexy ,top and bottom,
										wank,ow(condom), Sensual B2B . *All you can add on to your
										hour and half an hour/Extra service .
									</p>

									<p className={`${aref_ruqaa.className}  text-gray-500 mb-3`}>
										With our package/general service, satisfaction is
										guaranteed. Additional services would be recommended in case
										you would like to get more fun, fully meet what your needs
										and complete your hornyness.
									</p>

									<p className={`${aref_ruqaa.className}  text-gray-500 mb-3`}>
										Buying additional services which you desire. This way, you
										will be control the situation of our love story or create
										how you like it in your way to satisfy
									</p>

									<p className={`${aref_ruqaa.className}  text-gray-500 mb-3`}>
										For first time customer, please kindly inform us your
										concerns regarding the services without hesitate. *We follow
										your instructions
									</p>

									<div className="mt-2">
										<p
											className={`${aref_ruqaa.className} text-lg  text-gray-700 text-center`}
										>
											Service List/ Extra services for the package
										</p>
									</div>

									<div className="mt-2">
										<p className={`${aref_ruqaa.className}  text-gray-700 `}>
											- Full Girlfriend Experience
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 ms-3`}
										>
											I offer a sensual girlfriend experience
										</p>
									</div>

									<div className="mt-2">
										<p className={`${aref_ruqaa.className}  text-gray-700 `}>
											- French Kissing
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 ms-3`}
										>
											I adore passionate french kissing, oral hygiene is
											paramount, I will always have minty fresh breath for your
											arrival, please ensure you do the same.
										</p>
									</div>

									<div className="mt-2">
										<p className={`${aref_ruqaa.className}  text-gray-700 `}>
											- OWO
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 ms-3`}
										>
											Please make sure you are freshly showered and immaculately
											clean. Because I like to suck deep.
										</p>
									</div>

									<div className="mt-2">
										<p className={`${aref_ruqaa.className}  text-gray-700 `}>
											- Protected Sex
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 ms-3`}
										>
											Sex is always protected, I respect and value my health and
											so should you.
										</p>
									</div>

									<div className="mt-2">
										<p className={`${aref_ruqaa.className}  text-gray-700 `}>
											- Cum
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 ms-3`}
										>
											I can do whatever you want baby.
										</p>
									</div>

									<div className="mt-2">
										<p className={`${aref_ruqaa.className}  text-gray-700 `}>
											- Fetish's & Kinks
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 ms-3`}
										>
											Domination - SPH - Fin Dom - Foot Fetish & Many More I Am
											Told I Am The Perfect Goddess To Worship
										</p>
									</div>

									<div className="mt-2">
										<p className={`${aref_ruqaa.className}  text-gray-700 `}>
											- Rimming
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 ms-3`}
										>
											Please make sure you are freshly showered and immaculately
											clean. I can lick ass for you. That's so cheesy!
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex w-full justify-center align-middle bg-white px-4 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
											onClick={() => setIsOpenService(false)}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<Etiquette setIsOpenEtiquette={setIsOpenEtiquette} />
			<Transition appear show={isOpenEtiquette} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-20"
					onClose={() => setIsOpenEtiquette(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-xl text-gray-800 dark:text-gray-600 uppercase tracking-widest font-[100]"
									>
										Etiquette
									</Dialog.Title>
									<div className="mt-2">
										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											FEE HANDLING : To prevent any awkward moments, please
											ensure you have the correct fee to present within the
											first 10 minutes of meeting.
										</p>

										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											PERSONAL HYGIENE I am always freshly showered and well
											groomed and expect the same from you. I have shower
											facilities, mens toiletries and fresh fluffy towels you
											wish to freshen up at my place.
										</p>

										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											TIME KEEPING : You must let me know as soon as possible if
											you need to cancel your booking.
										</p>

										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											BAD MANNERS / ABUSIVE BEHAVIOUR : I do not tolerate any
											threats, nuisance or obsessive behaviour.I am not into
											rough sexual activity, If I have to repeatedly tell you to
											stop, I will terminate our meet without a refund.
										</p>

										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											CANCELLATIONS : Failure to cancel/ turn up to a booking
											will result in you being banned from making future
											bookings with me. All bookings must be confirmed via call
											or text before 9 am on the day
										</p>

										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											We do not expect to negotiate with the price of service,
											and we do not welcome a customer who does not pay the
											price fully.
										</p>

										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											The quality you got is worth it. Please understand and do
											not take advantage of our work hard. A
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex w-full justify-center align-middle bg-white px-4 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
											onClick={() => setIsOpenEtiquette(false)}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<Review />

			<FAQ />

			<Book setIsOpenBook={setIsOpenBook} />
			<Transition appear show={isOpenBook} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-20"
					onClose={() => setIsOpenBook(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-xl text-gray-800 dark:text-gray-600 uppercase tracking-widest font-[100]"
									>
										How to Book
									</Dialog.Title>
									<div className="mt-2">
										<p
											className={`${aref_ruqaa.className} text-lg text-center text-gray-500 mb-3`}
										>
											SMS or WhatsApp
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											Please send the message for the services to notify and
											avoid invisible of your message. - Response your message
											as quickly as possible.
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											With your hours purchase we provide the best experience
											with the best of our ability. Please inform for any
											special services you require.
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-3`}
										>
											For first-time trial: We provide a special gentle service.
											Please kindly inform us of your concerns regarding the
											services. * Follow your instructions :3
										</p>
										<p
											className={`${aref_ruqaa.className} ms-5 text-gray-500 mb-3`}
										>
											- Example Hello, I would like to see you at 11.30am. for
											half an hour and Girlfriend experience Thanks Rob
										</p>
										<p
											className={`${aref_ruqaa.className} ms-5 text-gray-500 mb-3`}
										>
											- Hello Cartier, I saw your ad on adultwork. Do you have
											availability this evening? I am probably looking for 1
											hour. I am a first timer so a bit nervous. Thanks Tim
										</p>

										<p
											className={`${aref_ruqaa.className} text-lg text-center text-gray-500 mb-3`}
										>
											Booking and cancellation
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-2`}
										>
											Carefully pay attention to all requests and details. Free
											style working as your desire. Within the time provided, we
											guarantee by the satisfaction.
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-2`}
										>
											Trustworthy services, no customer information disclosed.
											remove evidence after job, no data backup.
										</p>
										<p
											className={`${aref_ruqaa.className}  text-gray-500 mb-2`}
										>
											Your safety and happiness are our number one priority.
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex w-full justify-center align-middle bg-white px-4 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
											onClick={() => setIsOpenBook(false)}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>

			<div style={{ position: "fixed", bottom: 80, right: -40 }}>
				<Link
				href={"https://wa.me/message/2BCUIWKERU3DP1"}
				
			>
				<button
					type="button"
					className="inline-flex w-full justify-center -rotate-90 align-middle bg-[#E3C797] px-3 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
				>
					<Phone size={18} className="text-gray-500 me-2" />
					WhatsApp
				</button>
			</Link>
			</div>
		</>
	);
}
