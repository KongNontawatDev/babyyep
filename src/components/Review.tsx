import { aref_ruqaa } from "@/app/layout";
import Carousel from "nuka-carousel";
import React from "react";
import {
	renderCenterLeftControls,
	renderCenterRightControls,
} from "./home/controls";
import Review1 from "./review/Review1";
import Review2 from "./review/Review2";
import Review3 from "./review/Review3";

export default function Review() {
	return (
		<section className="bg-white dark:bg-gray-900 py-10"  id="#review">
			<div className="container max-w-[1200px] mx-auto">
				<h1 className="text-2xl text-center text-gray-800 lg:text-3xl dark:text-white uppercase tracking-widest font-[100]">
					REVIEW
				</h1>

				{/* <p
					className={`${aref_ruqaa.className} mx-auto mt-6 text-center text-gray-500 dark:text-gray-300`}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
					ex placeat modi magni quia error alias, adipisci rem similique, at
					omnis eligendi optio eos harum.
				</p> */}
			</div>

			<Carousel
				// autoplay
				renderCenterLeftControls={renderCenterLeftControls}
				renderCenterRightControls={renderCenterRightControls}
			>
				<Review1 />
				<Review2 />
				<Review3 />
			</Carousel>
		</section>
	);
}
