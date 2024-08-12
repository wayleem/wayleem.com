import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
	texts: string[];
	interval: number;
	className?: string;
	textClass?: string;
	containerClass?: string;
}

export default function RotatingText({ texts, interval, className, textClass, containerClass }: RotatingTextProps) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, interval);
		return () => clearInterval(intervalId);
	}, [texts, interval]);

	return (
		<div className={`overflow-hidden relative ${className}`}>
			<AnimatePresence initial={false}>
				<motion.div
					key={index}
					initial={{ y: "150%" }}
					animate={{ y: "0%" }}
					exit={{ y: "-150%" }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className={`absolute inset-0 flex md:justify-start justify-center ${containerClass}`}
				>
					<h3 className={`text-black underline decoration-2 text-center ${textClass}`}>{texts[index]}</h3>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
