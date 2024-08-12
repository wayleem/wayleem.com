// hooks/useScrollToSection.ts
import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";

export const useScrollToSection = () => {
	const { currentPage } = usePageContext();

	useEffect(() => {
		const section = document.getElementById(currentPage);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}, [currentPage]);
};
