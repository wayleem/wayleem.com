// components/SlidingBanner.tsx
import React from "react";
import { motion } from "framer-motion";

interface SlidingBannerProps {
	text: string;
	duration?: number; // in seconds
	className?: string;
	separator?: string;
}

const SlidingBanner: React.FC<SlidingBannerProps> = ({ text, duration = 20, className = "", separator = "•" }) => {
	// Repeat the text to create a seamless loop
	const repeatedText = `${text} ${separator} `.repeat(10);

	return (
		<div className={`overflow-hidden whitespace-nowrap ${className}`}>
			<motion.div
				className="inline-block"
				initial={{ x: "0%" }}
				animate={{ x: "-50%" }}
				transition={{
					x: {
						duration: duration,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
					},
				}}
			>
				{repeatedText}
			</motion.div>
		</div>
	);
};

export default SlidingBanner;
