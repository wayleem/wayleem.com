import RotatingText from "../components/RotatingText";
import positions from "../static/positions";

export function Header() {
	return (
		<div className="flex flex-col w-full font-semibold space-y-4 items-center md:items-start">
			<h2 className="w-fit title-1 p-4 bg-black text-white">William Huang</h2>
			<RotatingText
				texts={positions}
				interval={3000}
				className="h-[60px] xl:h-[80px] w-[800px]"
				textClass="title-2"
			/>
			<h3 className="title-2">Based in NYC</h3>
		</div>
	);
}
