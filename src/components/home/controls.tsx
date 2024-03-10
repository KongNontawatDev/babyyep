import React from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "react-feather";

export const renderCenterLeftControls = ({
	previousDisabled,
	previousSlide,
}: {
	previousDisabled:any,
	previousSlide:any
}) => (
	<button
		className={clsx(
			"bg-transparent border-none",
			"cursor-pointer disabled:cursor-not-allowed",
			"appearance-none flex items-center m-3",
			"text-black opacity-70 hover:opacity-100 disabled:opacity-30"
		)}
		disabled={previousDisabled}
		onClick={previousSlide}
		aria-label="Go to previous slide"
	>
		<ChevronLeft size={32} />
	</button>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }:{nextDisabled:any, nextSlide:any}) => (
	<button
		className={clsx(
			"bg-transparent border-none",
			"cursor-pointer disabled:cursor-not-allowed",
			"appearance-none flex items-center m-3",
			"text-black opacity-70 hover:opacity-100 disabled:opacity-30"
		)}
		disabled={nextDisabled}
		onClick={nextSlide}
		aria-label="Go to next slide"
	>
		<ChevronRight size={32} />
	</button>
);
