import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

function FloatingShape({ position, rotation, color, type, speed, scale }) {
  const meshRef = useRef(null)

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = rotation[0] + t * speed * 0.3
    meshRef.current.rotation.y = rotation[1] + t * speed * 0.2
    meshRef.current.position.x = position[0] + Math.sin(t * speed * 0.5) * 0.3
    meshRef.current.position.y = position[1] + Math.cos(t * speed * 0.4) * 0.3
  })

  const args = type === 'torus' ? [0.8, 0.3, 16, 48]
    : type === 'octa' ? [0.7, 0]
    : type === 'icosa' ? [0.6, 0]
    : [0.5, 0.2, 0.3]

  const Component = type === 'torus' ? THREE.TorusKnotGeometry
    : type === 'octa' ? THREE.OctahedronGeometry
    : type === 'icosa' ? THREE.IcosahedronGeometry
    : THREE.BoxGeometry

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <primitive object={new Component(...args)} />
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        distort={0.15}
        speed={2}
        transparent
        opacity={0.35}
      />
    </mesh>
  )
}

function Shapes() {
  const shapes = useMemo(() => [
    { position: [-4, 2, -5], rotation: [0.5, 0.8, 0], color: '#00d4ff', type: 'torus', speed: 0.4, scale: 1.2 },
    { position: [5, -3, -8], rotation: [0.2, 1.2, 0.5], color: '#7c3aed', type: 'icosa', speed: 0.3, scale: 1 },
    { position: [-3, -4, -10], rotation: [0.8, 0.3, 0.1], color: '#00ff88', type: 'octa', speed: 0.5, scale: 0.9 },
    { position: [6, 4, -6], rotation: [0.1, 0.6, 0.4], color: '#a855f7', type: 'torus', speed: 0.35, scale: 0.8 },
    { position: [0, -5, -12], rotation: [0.3, 0.9, 0.2], color: '#00d4ff', type: 'icosa', speed: 0.2, scale: 1.4 },
    { position: [-6, 5, -7], rotation: [0.7, 0.2, 0.6], color: '#00ff88', type: 'octa', speed: 0.45, scale: 0.7 },
  ], [])

  return shapes.map((s, i) => <FloatingShape key={i} {...s} />)
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#7c3aed" />
        <Shapes />
      </Canvas>
    </div>
  )
}
