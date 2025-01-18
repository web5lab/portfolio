import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

const BlockchainConnections = () => {
  const points = Array.from({ length: 50 }, () => {
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    const r = 1;
    return new THREE.Vector3(
      r * Math.sin(theta) * Math.cos(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(theta)
    );
  });

  const lines = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].distanceTo(points[j]) < 0.8) {
        lines.push([points[i], points[j]]);
      }
    }
  }

  return (
    <>
      {points.map((point, i) => (
        <motion.mesh key={i} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#4F46E5" />
        </motion.mesh>
      ))}
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#4F46E5"
          lineWidth={0.5}
          opacity={0.4}
          transparent
        />
      ))}
    </>
  );
};

const RotatingGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial
          color="#1E1B4B"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
      <BlockchainConnections />
    </group>
  );
};

const BlockchainGlobe = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
};

export default BlockchainGlobe;