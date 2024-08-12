import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { ThreeEvent } from "@react-three/fiber";

export default function Scene() {
	const { camera } = useThree();
	const gltf = useLoader(GLTFLoader, "/models/computer1.glb");
	const [isMonitorOn, setIsMonitorOn] = useState(false);
	const monitorRef = useRef<THREE.Mesh | null>(null);
	const monitorMaterialRef = useRef<THREE.Material | null>(null);

	useEffect(() => {
		if (gltf.cameras.length > 0) {
			const embeddedCamera = gltf.cameras[0];
			if (embeddedCamera instanceof THREE.PerspectiveCamera) {
				camera.near = embeddedCamera.near;
				camera.far = embeddedCamera.far;
				camera.position.copy(embeddedCamera.position);
				camera.rotation.copy(embeddedCamera.rotation);
				camera.updateProjectionMatrix();
			}
		}

		gltf.scene.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				if (child.name === "Monitor") {
					monitorRef.current = child;
					if (child.material instanceof THREE.Material) {
						monitorMaterialRef.current = child.material.clone();
					}
				}
			}
		});
	}, [gltf, camera]);

	const handleClick = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation();
		setIsMonitorOn(!isMonitorOn);

		if (monitorRef.current && monitorMaterialRef.current) {
			const material = monitorMaterialRef.current;
			if (material instanceof THREE.MeshStandardMaterial) {
				if (isMonitorOn) {
					// Turn off
					material.emissive.setHex(0x000000);
					material.emissiveIntensity = 0;
				} else {
					// Turn on
					material.emissive.setHex(0x00ff00); // Green glow
					material.emissiveIntensity = 2;
				}
				monitorRef.current.material = material;
			}
		}
	};

	const handlePointerEnter = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation();
		document.documentElement.style.cursor = "pointer";
	};

	const handlePointerLeave = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation();
		document.documentElement.style.cursor = "auto";
	};

	return (
		<>
			<ambientLight intensity={2} />
			<primitive
				object={gltf.scene}
				onClick={handleClick}
				onPointerEnter={handlePointerEnter}
				onPointerLeave={handlePointerLeave}
			/>
		</>
	);
}
