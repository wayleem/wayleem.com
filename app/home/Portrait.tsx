import headshot from "@/public/photos/headshot.jpg";
import Image from "next/image";

function Portrait() {
	return (
		<>
			{/* Fake shadow element */}
			<div className="absolute top-4 left-4 w-full h-full bg-black" />

			{/* Main portrait container */}
			<div className="relative w-full h-full overflow-hidden border-4 border-black p-8 bg-blue-secondary">
				<div className="relative w-full h-full border-4 border-black">
					<Image src={headshot} layout="fill" objectFit="cover" alt="Picture of William" />
				</div>
			</div>
		</>
	);
}

export default Portrait;
