"use client";

import dynamic from "next/dynamic";

const CubeScene = dynamic(() => import("./CubeScene"), { ssr: false });

export default function CubeSceneWrapper() {
	return (
		<div className="absolute inset-0 w-full z-10">
			<CubeScene />
		</div>
	);
}
