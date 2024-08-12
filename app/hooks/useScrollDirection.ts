// hooks/useScrollDirection.ts
import { useState, useEffect, RefObject } from "react";

export function useScrollDirection(scrollRef: RefObject<HTMLElement>) {
	const [scrollDirection, setScrollDirection] = useState("up");
	const [prevScrollY, setPrevScrollY] = useState(0);
	const threshold = 50; // Adjust this value as needed

	useEffect(() => {
		const scrollElement = scrollRef.current;
		if (!scrollElement) return;

		const handleScroll = () => {
			const currentScrollY = scrollElement.scrollTop;
			if (Math.abs(currentScrollY - prevScrollY) < threshold) {
				return;
			}
			if (currentScrollY > prevScrollY) {
				setScrollDirection("down");
			} else {
				setScrollDirection("up");
			}
			setPrevScrollY(currentScrollY);
		};

		scrollElement.addEventListener("scroll", handleScroll, { passive: true });
		return () => scrollElement.removeEventListener("scroll", handleScroll);
	}, [prevScrollY, scrollRef, threshold]);

	return scrollDirection;
}
