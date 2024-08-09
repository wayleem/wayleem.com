"use client";

import { Canvas, ThreeEvent, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
	PlaneGeometry,
	MeshStandardMaterial,
	Mesh,
	DoubleSide,
	TextureLoader,
	Texture,
	ClampToEdgeWrapping,
	NearestFilter,
	LineBasicMaterial,
	Object3D,
	EdgesGeometry,
	LineSegments,
	Color,
	PerspectiveCamera,
} from "three";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import homePNG from "./assets/navIcons/home.png";
import aboutPNG from "./assets/navIcons/about.png";
import skillsPNG from "./assets/navIcons/skills.png";
import experiencesPNG from "./assets/navIcons/experiences.png";
import blogPNG from "./assets/navIcons/blog.png";
import contactPNG from "./assets/navIcons/contact.png";

function CameraAdjuster() {
	const { camera, size } = useThree();

	useEffect(() => {
		if (camera instanceof PerspectiveCamera) {
			camera.aspect = size.width / size.height;
			camera.updateProjectionMatrix();
		}
	}, [camera, size]);

	return null;
}

function CubeScene() {
	const router = useRouter();
	const currentPath = usePathname();
	const [bgColor, setBgColor] = useState(new Color("#ffffff")); // Default color
	const plane = new PlaneGeometry(1, 1);

	// Texture handling
	const textureInfo = {
		home: homePNG.src,
		about: aboutPNG.src,
		skills: skillsPNG.src,
		experiences: experiencesPNG.src,
		blog: blogPNG.src,
		contact: contactPNG.src,
	};

	function scaleTexture(texture: Texture, scale: number) {
		texture.repeat.set(scale, scale);
		texture.offset.set((1 - scale) / 2, (1 - scale) / 2);
	}

	const textures = Object.entries(textureInfo).reduce(
		(acc, [key, path]) => {
			const texture = useLoader(TextureLoader, path) as Texture;
			texture.wrapS = texture.wrapT = ClampToEdgeWrapping;
			texture.minFilter = texture.magFilter = NearestFilter;

			const scales = {
				home: 1,
				about: 1,
				skills: 1,
				experiences: 1,
				blog: 1,
				contact: 1,
			};
			scaleTexture(texture, scales[key as keyof typeof scales]);

			return { ...acc, [key]: texture };
		},
		{} as Record<string, Texture>,
	);

	// color definitions
	const colors = {
		home: {
			default: "#07ed86",
			highlight: "#57fdb5",
			background: "#a4fcd6",
		},
		blog: {
			default: "#cc00ff",
			highlight: "#da47ff",
			background: "#e580ff",
		},
		contact: {
			default: "#ff0080",
			highlight: "#ff4da3",
			background: "#ff85c0",
		},
		experiences: {
			default: "#00ffff",
			highlight: "#66ffff",
			background: "#aefcfc",
		},
		about: {
			default: "#4040ff",
			highlight: "#7474ff",
			background: "#a9a9fc",
		},
		skills: {
			default: "#6099fc",
			highlight: "#86b3ff",
			background: "#b1cdfc",
		},
	};

	const createMaterial = (color: string, map: Texture) => {
		return new MeshStandardMaterial({
			color,
			map,
			side: DoubleSide,
			wireframe: false,
		});
	};

	// Modified material creation
	const materials = Object.entries(colors).reduce(
		(acc, [key, colorSet]) => ({
			...acc,
			[`default_${key}`]: createMaterial(colorSet.default, textures[key as keyof typeof textures]),
			[`highlight_${key}`]: createMaterial(colorSet.highlight, textures[key as keyof typeof textures]),
		}),
		{} as Record<string, MeshStandardMaterial>,
	);

	function CubeOutline({ size = 1, color = "#000000" }) {
		const outline = new Object3D();
		const edgesGeometry = new EdgesGeometry(new PlaneGeometry(size, size));
		const lineMaterial = new LineBasicMaterial({ color, linewidth: 2 });

		const positions: [number, number, number][] = [
			[0, 0, size / 2],
			[0, 0, -size / 2],
			[size / 2, 0, 0],
			[-size / 2, 0, 0],
			[0, size / 2, 0],
			[0, -size / 2, 0],
		];

		const rotations: [number, number, number][] = [
			[0, 0, 0],
			[0, 0, 0],
			[0, Math.PI / 2, 0],
			[0, Math.PI / 2, 0],
			[Math.PI / 2, 0, 0],
			[Math.PI / 2, 0, 0],
		];

		positions.forEach((position, index) => {
			const line = new LineSegments(edgesGeometry, lineMaterial);
			line.position.set(position[0], position[1], position[2]);
			line.rotation.set(rotations[index][0], rotations[index][1], rotations[index][2]);
			outline.add(line);
		});

		return <primitive object={outline} />;
	}

	// Navigation
	function _onClick(e: ThreeEvent<MouseEvent>) {
		e.stopPropagation();

		switch (e.object.name) {
			case "home":
				router.push("/");
				break;
			case "about":
				router.push("/about");
				break;
			case "skills":
				router.push("/skills");
				break;
			case "experiences":
				router.push("/experiences");
				break;
			case "blog":
				router.push("/blog");
				break;
			case "contact":
				router.push("/contact");
				break;
		}
	}

	// Pointer hover handling
	function _onPointerEnter(e: ThreeEvent<MouseEvent>, mesh: Mesh) {
		e.stopPropagation();
		document.documentElement.style.cursor = "pointer";
		mesh.material = materials[`highlight_${mesh.name}`];
	}

	function _onPointerLeave(e: ThreeEvent<MouseEvent>, mesh: Mesh) {
		e.stopPropagation();
		document.documentElement.style.cursor = "auto";
		mesh.material = materials[`default_${mesh.name}`];
	}

	// Mesh data
	type MeshData = {
		name: string;
		position: [number, number, number];
		rotation?: [number, number, number];
	};
	const meshes: MeshData[] = [
		{ name: "home", position: [0, 0, 0.5] },
		{ name: "blog", position: [0, 0, -0.5] },
		{ name: "contact", position: [0.5, 0, 0], rotation: [0, Math.PI / 2, 0] },
		{ name: "experiences", position: [-0.5, 0, 0], rotation: [0, Math.PI / 2, 0] },
		{ name: "about", position: [0, 0.5, 0], rotation: [Math.PI / 2, 0, 0] },
		{ name: "skills", position: [0, -0.5, 0], rotation: [Math.PI / 2, 0, 0] },
	];

	const pathToColorKey: Record<string, keyof typeof colors> = {
		"/": "home",
		"/about": "about",
		"/skills": "skills",
		"/experiences": "experiences",
		"/blog": "blog",
		"/contact": "contact",
	};

	const getCurrentBackgroundColor = () => {
		const colorKey = pathToColorKey[currentPath] || "home";
		return colors[colorKey].background;
	};

	useEffect(() => {
		setBgColor(new Color(getCurrentBackgroundColor()));
	}, [currentPath]);

	return (
		<Canvas
			camera={{
				position: [3, 3, 3],
				fov: 75,
			}}
			dpr={window.devicePixelRatio}
		>
			<CameraAdjuster />
			<SceneContent bgColor={bgColor} />
			<ambientLight intensity={2} />
			<directionalLight position={[2, 3, 1]} target-position={[0, 0, 0.5]} intensity={2} />
			{meshes.map((mesh) => (
				<mesh
					key={mesh.name}
					name={mesh.name}
					position={mesh.position}
					rotation={mesh.rotation}
					geometry={plane}
					material={materials[`default_${mesh.name}`]}
					onClick={_onClick}
					onPointerEnter={(e) => _onPointerEnter(e, e.object as Mesh)}
					onPointerLeave={(e) => _onPointerLeave(e, e.object as Mesh)}
				/>
			))}
			<CubeOutline size={1} color="#000000" />
			<OrbitControls enablePan={true} enableZoom={false} />
		</Canvas>
	);
}

function SceneContent({ bgColor }: { bgColor: Color }) {
	const { gl } = useThree();

	useEffect(() => {
		gl.setClearColor(bgColor);
	}, [gl, bgColor]);

	return null;
}

export default CubeScene;
