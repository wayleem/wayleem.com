import { Canvas, ThreeEvent } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from 'three'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CubeScene() {
  const [theme, setTheme] = useState('light')

  useEffect(
    () => document.documentElement.setAttribute('data-theme', theme),
    [theme]
  )

  const plane = new PlaneGeometry(1, 1)

  const default_material = new MeshBasicMaterial({
    color: 'white',
    side: DoubleSide,
    wireframe: false,
  })

  const highlight_material = new MeshBasicMaterial({
    color: '#ff9a73',
    side: DoubleSide,
    wireframe: false,
  })

  const navigate = useNavigate()
  function _onClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation()
    switch (e.object.name) {
      case 'light':
        setTheme('light')
        break
      case 'dark':
        setTheme('dark')
        break
      case 'about':
        navigate('/about')
        break
      case 'skills':
        navigate('/skills')
        break
      case 'projects':
        navigate('/projects')
        break
      case 'contact':
        navigate('/contact')
        break
    }
  }

  function _onPointerEnter(e: ThreeEvent<MouseEvent>, mesh: Mesh) {
    e.stopPropagation()
    mesh.material = highlight_material
  }

  function _onPointerLeave(e: ThreeEvent<MouseEvent>, mesh: Mesh) {
    e.stopPropagation()
    mesh.material = default_material
  }

  type MeshData = {
    name: string
    position: [number, number, number]
    rotation?: [number, number, number]
  }
  const meshes: MeshData[] = [
    { name: 'about', position: [0, 0, 0.5] },
    { name: 'projects', position: [0, 0, -0.5] },
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
          material={default_material}
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
