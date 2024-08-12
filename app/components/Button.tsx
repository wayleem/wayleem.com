// components/Button.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
	label: string;
	color: string;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		onClick();
	};

	return (
		<motion.button
			className={`relative py-4 px-8 button-text uppercase border-2 border-black ${color} transition-all duration-500 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] overflow-hidden`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={handleClick}
			initial={{ boxShadow: "4px 4px #ffffff, 9px 9px #151515" }}
			animate={{
				boxShadow: isHovered ? "0 0 #ffffff, 0 0 #151515" : "4px 4px #ffffff, 9px 9px #151515",
			}}
			transition={{ duration: 0.2 }}
		>
			{/* Sliding background span */}
			<motion.span
				className="absolute inset-0 bg-black z-[1]"
				initial={{ width: 0 }}
				animate={{ width: isHovered ? "100%" : 0 }}
				transition={{ duration: 0.4, ease: [0.785, 0.135, 0.15, 0.86] }}
			></motion.span>
			{/* Label with color change */}
			<span className={`relative z-[1] ${isHovered ? "text-white" : "text-black"}`}>{label}</span>
		</motion.button>
	);
};

export default Button;
