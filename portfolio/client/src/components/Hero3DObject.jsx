import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function CoreObject() {
  const meshRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    const mx = mouseRef.current.x * 0.3
    const my = mouseRef.current.y * 0.3

    meshRef.current.position.x = mx + Math.sin(t * 0.3) * 0.2
    meshRef.current.position.y = my + Math.cos(t * 0.4) * 0.2
    meshRef.current.rotation.x = t * 0.15
    meshRef.current.rotation.y = t * 0.25
    meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.35, 100, 16]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          distort={0.2}
          speed={3}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function OrbitingRing() {
  const ringRef = useRef(null)

  useFrame(({ clock }) => {
    if (!ringRef.current) return
    ringRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3
    ringRef.current.rotation.y = clock.getElapsedTime() * 0.1
  })

  return (
    <mesh ref={ringRef} scale={2.8}>
      <ringGeometry args={[1.1, 1.3, 64]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.15} side={2} />
    </mesh>
  )
}

function ParticleField() {
  const count = 200
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }

  const pointsRef = useRef(null)

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02
    pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00d4ff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

export default function Hero3DObject() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden lg:block pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7c3aed" />
        <ParticleField />
        <OrbitingRing />
        <CoreObject />
      </Canvas>
    </div>
  )
}
