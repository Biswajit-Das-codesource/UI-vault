import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function DotGlobe() {
  const pointsRef = useRef();

  // Animate rotation
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  // Create point geometry
  const pointGeometry = new THREE.SphereGeometry(1, 100, 100).toNonIndexed();
  const vertexCount = pointGeometry.attributes.position.count;

  const colors = [];
  for (let i = 0; i < vertexCount; i++) {
    colors.push(1, 1, 1); // white dots
  }

  pointGeometry.setAttribute(
    'color',
    new THREE.Float32BufferAttribute(colors, 3)
  );

  return (
    <points ref={pointsRef} geometry={pointGeometry}>
      <pointsMaterial
        size={0.01}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export default function GlobeScene() {
  return (
    <div className="w-full h-[80vh] bg-black flex flex-col items-center justify-center">
        
      <h1 className="text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700 z-10 -mb-20">
        Globe
      </h1>
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={1} />
        <DotGlobe />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
