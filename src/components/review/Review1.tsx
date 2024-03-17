import { aref_ruqaa } from "@/utils/font";
import React from "react";
import StarIcon from "../icon/star";

export default function Review1() {
	return (
		<>
			<div className="container max-w-[1200px] mx-auto">
				<div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10">

					<div className="p-6 bg-[#FDF6E9] dark:bg-gray-800 md:p-8">
						<p
							className={`${aref_ruqaa.className} leading-loose text-gray-500 dark:text-gray-300 `}
						>
							“1 Once I met her I didn't except her to look the same as the picture, actually she looks better than pics sexy and I like her voice and her smellTake good care. I will come back soon.”.
						</p>

						<div className="flex items-center mt-6">
							<img
								className="object-cover rounded-full w-14 h-14"
								src="/img/avatar.jpg"
								alt=""
							/>
							<div className="mx-4">
								<h1 className="font-semibold text-gray-500">Alexander</h1>
								<span className="text-sm text-gray-500 dark:text-gray-300">
									<div className="flex">
										<StarIcon />
										<StarIcon />
										<StarIcon />
										<StarIcon />
										<StarIcon />
									</div>
								</span>
							</div>
						</div>
					</div>

					<div className="p-6 bg-[#FDF6E9] dark:bg-gray-800 md:p-8">
						<p
							className={`${aref_ruqaa.className} leading-loose text-gray-500 dark:text-gray-300 `}
						>
						I booked for whole day service. We had so much fun doing many things she took very such a good care of me. I truly believe she's could be my gf for real DAnana It made my day. I'm very happy. Great choice of using your service.
						</p>

						<div className="flex items-center mt-6">
							<img
								className="object-cover rounded-full w-14 h-14"
								src="/img/avatar.jpg"
								alt=""
							/>
							<div className="mx-4">
								<h1 className="font-semibold text-gray-500">Tyler</h1>
								<span className="text-sm text-gray-500 dark:text-gray-300">
									<div className="flex">
										<StarIcon />
										<StarIcon />
										<StarIcon />
										<StarIcon />
										<StarIcon />
									</div>
								</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	);
}
