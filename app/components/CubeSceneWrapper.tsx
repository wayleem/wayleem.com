"use client";

import dynamic from "next/dynamic";

const CubeScene = dynamic(() => import("./CubeScene"), { ssr: false });

export default function CubeSceneWrapper() {
	return (
		<div className="w-full h-full">
			<CubeScene />
		</div>
	);
}
