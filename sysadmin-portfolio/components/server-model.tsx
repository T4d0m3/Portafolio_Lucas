"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function ServerModel(props) {
  const serverRef = useRef()

  // Material con brillo para el servidor - morado
  const glowMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x8a2be2), // Morado
    emissive: new THREE.Color(0x8a2be2), // Morado
    emissiveIntensity: 0.7, // Aumentado para más brillo
    metalness: 0.8,
    roughness: 0.2,
  })

  // Animar el servidor
  useFrame((state) => {
    if (serverRef.current) {
      serverRef.current.rotation.y += 0.005

      // Añadir animación flotante sutil
      serverRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1

      // Añadir efecto pulsante para más neón
      const pulseIntensity = Math.sin(state.clock.elapsedTime * 2) * 0.2 + 0.7
      if (serverRef.current.material) {
        serverRef.current.material.emissiveIntensity = pulseIntensity
      }
    }
  })

  return (
    <group ref={serverRef} {...props}>
      {/* Cuerpo principal del servidor */}
      <mesh material={glowMaterial}>
        <boxGeometry args={[1.5, 0.2, 1]} />
      </mesh>

      {/* Servidores apilados */}
      <mesh material={glowMaterial} position={[0, 0.2, 0]}>
        <boxGeometry args={[1.5, 0.15, 1]} />
      </mesh>

      <mesh material={glowMaterial} position={[0, 0.4, 0]}>
        <boxGeometry args={[1.5, 0.15, 1]} />
      </mesh>

      {/* Luces indicadoras */}
      <mesh position={[0.6, 0.5, 0.4]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={1} />
      </mesh>

      <mesh position={[0.4, 0.5, 0.4]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={1} />
      </mesh>

      {/* Cables */}
      <mesh position={[-0.6, 0.3, 0.4]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      <mesh position={[-0.5, 0.3, 0.4]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
    </group>
  )
}

