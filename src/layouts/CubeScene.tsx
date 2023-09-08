import { Canvas, ThreeEvent, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  TextureLoader,
  Texture,
  ClampToEdgeWrapping,
  NearestFilter,
} from 'three'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import switchOnMP3 from '../assets/audio/switch-on.mp3'
import switchOffMP3 from '../assets/audio/switch-off.mp3'
import profile from '../assets/textures/aboutme.jpg'
import lightbulb from '../assets/textures/skills.jpg'
import folder from '../assets/textures/experience.jpg'
import mail from '../assets/textures/contactme.jpg'
import sun from '../assets/textures/lightmode.jpg'
import moon from '../assets/textures/darkmode.jpg'

function CubeScene() {
  const [theme, setTheme] = useState('light')

  useEffect(
    () => document.documentElement.setAttribute('data-theme', theme),
    [theme]
  )

  const plane = new PlaneGeometry(1, 1)
  // materials --------------------------------------------

  const textureInfo = {
    about: profile,
    skills: lightbulb,
    experience: folder,
    contact: mail,
    light: sun,
    dark: moon,
  }

  const textures = Object.entries(textureInfo).reduce(
    (acc, [key, path]) => {
      const texture = useLoader(TextureLoader, path) as Texture

      texture.wrapS = texture.wrapT = ClampToEdgeWrapping
      texture.minFilter = texture.magFilter = NearestFilter

      return { ...acc, [key]: texture }
    },
    {} as Record<string, Texture>
  )
  const createMaterial = (color: string, map: Texture) => {
    return new MeshBasicMaterial({
      color,
      map,
      side: DoubleSide,
      wireframe: false,
    })
  }

  const materials = Object.entries(textures).reduce(
    (acc, [key, texture]) => ({
      ...acc,
      [`highlight_${key}`]: createMaterial('#ff9a73', texture),
      [`default_${key}`]: createMaterial('white', texture),
    }),
    {} as Record<string, MeshBasicMaterial>
  )

  // navigation ------------------------------------------
  const navigate = useNavigate()
  function _onClick(e: ThreeEvent<MouseEvent>) {
    const switchOn = new Audio(switchOnMP3)
    const switchOff = new Audio(switchOffMP3)

    e.stopPropagation()

    // top and bottom are dark mode togglers, the rest are pages
    switch (e.object.name) {
      case 'light':
        setTheme('light')
        if (theme !== e.object.name) switchOn.play()
        break
      case 'dark':
        setTheme('dark')
        if (theme !== e.object.name) switchOff.play()
        break
      case 'about':
        navigate('/about')
        break
      case 'skills':
        navigate('/skills')
        break
      case 'experience':
        navigate('/experience')
        break
      case 'contact':
        navigate('/contact')
        break
    }
  }

  // pointer hover handling ------------------------------------------------
  function _onPointerEnter(e: ThreeEvent<MouseEvent>, mesh: Mesh) {
    e.stopPropagation()
    document.documentElement.style.cursor = 'pointer'
    mesh.material = materials[`highlight_${mesh.name}`]
  }

  function _onPointerLeave(e: ThreeEvent<MouseEvent>, mesh: Mesh) {
    e.stopPropagation()
    document.documentElement.style.cursor = 'auto'
    mesh.material = materials[`default_${mesh.name}`]
  }

  // data -------------------------------------------------------------------
  type MeshData = {
    name: string
    position: [number, number, number]
    rotation?: [number, number, number]
  }
  const meshes: MeshData[] = [
    { name: 'about', position: [0, 0, 0.5] },
    { name: 'experience', position: [0, 0, -0.5] },
    { name: 'skills', position: [0.5, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { name: 'contact', position: [-0.5, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { name: 'light', position: [0, 0.5, 0], rotation: [Math.PI / 2, 0, 0] },
    { name: 'dark', position: [0, -0.5, 0], rotation: [Math.PI / 2, 0, 0] },
  ]

  return (
    <Canvas
      className="bg-neutral"
      camera={{
        aspect: window.innerWidth / window.innerHeight,
        position: [3, 3, 3],
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* makes up a cube */}
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
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  )
}

export default CubeScene
