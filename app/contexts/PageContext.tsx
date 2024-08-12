"use client";

// contexts/PageContext.tsx
import React, { createContext, useState, useContext } from "react";

type PageType = "home" | "about" | "skills" | "projects" | "articles" | "contact";

interface PageContextType {
	currentPage: PageType;
	setCurrentPage: (page: PageType) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [currentPage, setCurrentPage] = useState<PageType>("home");

	const updatePage = (page: PageType) => {
		console.log("Updating page to:", page);
		setCurrentPage(page);
	};

	return <PageContext.Provider value={{ currentPage, setCurrentPage: updatePage }}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
	const context = useContext(PageContext);
	if (context === undefined) {
		throw new Error("usePageContext must be used within a PageProvider");
	}
	return context;
};
