import { aref_ruqaa } from "@/app/layout";
import React from "react";
import StarIcon from "../icon/star";

export default function Review3() {
	return (
		<>
			<div className="container max-w-[1200px] mx-auto">
				<div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10">

					<div className="p-6 bg-[#FDF6E9] dark:bg-gray-800 md:p-8">
						<p
							className={`${aref_ruqaa.className} leading-loose text-gray-500 dark:text-gray-300 line-clamp-4`}
						>
							“I see a lot of review so I make decision to make appointment with her. I got 1hour and paid extra for French kiss and oral.  Like her smell, outfit she's good looking for overall, I'm happy with that And impressed that the place is very clean and appropriate that she is concerned about cleanness.  I need to wash my hand clean my mouth I think it's good thing to do which I never see anyway ask me to do like her. And thanks for following all my details.  Btw sex was 100/10”.
						</p>

						<div className="flex items-center mt-6">
							<img
								className="object-cover rounded-full w-14 h-14"
								src="/img/avatar.jpg"
								alt=""
							/>
							<div className="mx-4">
								<h1 className="font-semibold text-gray-500">Richard</h1>
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
							className={`${aref_ruqaa.className} leading-loose text-gray-500 dark:text-gray-300 line-clamp-4`}
						>
						" Yes, first time last Saturday.
It was a great experience for me.
Kinda nervous, but it was more relaxed than what I thought. Very
gentle. I'm okay with everything."
						</p>

						<p
							className={`${aref_ruqaa.className} leading-loose text-gray-500 dark:text-gray-300 line-clamp-4`}
						>
						Yes. She did all I said. follow the instructions so well
Well, i love it.
My new thing.
						</p>

												<p
							className={`${aref_ruqaa.className} leading-loose text-gray-500 dark:text-gray-300 line-clamp-4`}
						>
						Thanks for making my first time such a good experience ever.
Will come back for sure.
						</p>

						<div className="flex items-center mt-6">
							<img
								className="object-cover rounded-full w-14 h-14"
								src="/img/avatar.jpg"
								alt=""
							/>
							<div className="mx-4">
							<h1 className="font-semibold text-gray-500">Steve</h1>
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
