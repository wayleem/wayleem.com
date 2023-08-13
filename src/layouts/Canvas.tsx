import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {
  DoubleSide,
  Vector2,
  Vector3,
  Raycaster,
  MeshBasicMaterial,
  PlaneGeometry,
  PerspectiveCamera,
  Euler,
  Mesh,
} from 'three'

function CubeScene() {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(10, 10, 10)

  const CubeFaces: Mesh[] = [
    createCubeFace('face1', new Vector3(0, 0, 0.5)),
    createCubeFace('face2', new Vector3(0, 0, -0.5)),
    createCubeFace(
      'face3',
      new Vector3(0.5, 0, 0),
      new Euler(0, Math.PI / 2, 0)
    ),
    createCubeFace(
      'face4',
      new Vector3(-0.5, 0, 0),
      new Euler(0, Math.PI / 2, 0)
    ),
    createCubeFace(
      'face5',
      new Vector3(0, 0.5, 0),
      new Euler(Math.PI / 2, 0, 0)
    ),
    createCubeFace(
      'face6',
      new Vector3(0, -0.5, 0),
      new Euler(Math.PI / 2, 0, 0)
    ),
  ]
  let intersectedObject: THREE.Object3D | null
  const originalMaterial = new MeshBasicMaterial({
    wireframe: false,
    color: 0xff00ff,
    side: DoubleSide,
  })
  const highlightedMaterial = new MeshBasicMaterial({
    wireframe: true,
    color: 0x00ff00,
    side: DoubleSide,
  })

  const raycaster = new Raycaster()
  let intersects: THREE.Intersection[]

  const mouse = new Vector2()

  function _onMouseMove(event: globalThis.MouseEvent) {
    mouse.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    )
    raycaster.setFromCamera(mouse, camera)
    intersects = raycaster.intersectObjects(CubeFaces, false)

    if (intersects.length > 0) {
      intersectedObject = intersects[0].object
    } else {
      intersectedObject = null
    }

    CubeFaces.forEach((object: THREE.Mesh, i: number) => {
      if (intersectedObject && intersectedObject.name === object.name) {
        console.log(object.name + ' intersected')
        CubeFaces[i].material = highlightedMaterial
      } else {
        console.log('off')
        CubeFaces[i].material = originalMaterial
      }
    })
  }
  document.addEventListener('mousemove', _onMouseMove, false)

  return (
    <Canvas className="bg-black" camera={camera}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={CubeFaces[0]} />
      <primitive object={CubeFaces[1]} />
      <primitive object={CubeFaces[2]} />
      <primitive object={CubeFaces[3]} />
      <primitive object={CubeFaces[4]} />
      <primitive object={CubeFaces[5]} />
      <OrbitControls />
    </Canvas>
  )
}

export default CubeScene

function createCubeFace(name: string, position: Vector3, rotation?: Euler) {
  const geometry = new PlaneGeometry(1, 1)
  const material = new MeshBasicMaterial({
    color: 0x00ffff,
    side: DoubleSide,
  })

  const mesh = new Mesh(geometry, material)
  mesh.castShadow = true

  mesh.position.copy(position)
  if (rotation) {
    mesh.rotation.copy(rotation)
  }

  mesh.name = name

  return mesh
}
