import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

function AnimatedModel({ url, position = [0, 0, 0], scale = [2, 2, 2] }) {
  const modelRef = useRef();
  const geometry = useLoader(STLLoader, url);

  useFrame((_, delta) => {
    if (modelRef.current) {
      // Rotate using delta time for smooth, consistent animation
      modelRef.current.rotation.z += delta * 0.9; // ~0.015 per frame at 60fps
    }
  });

  return (
    <mesh ref={modelRef} geometry={geometry} position={position} scale={scale}>
      {/* Enhanced material for a more polished look */}
      <meshStandardMaterial color="gray" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

export default function RollingModel() {
  return (
    <Suspense fallback={<div style={{ color: 'white' }}>Loading 3D Models...</div>}>
      <Canvas camera={{ position: [0, -430, 100] }} style={{ height: '700px', width: '100%' }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 115]} intensity={3} />

        {/* The model is now rendered with an increased size */}
        <AnimatedModel url="/eiffel_final.stl" position={[0, -10, -90]} scale={[5, 5, 3]} />

        {/* Added damping for smoother control interactions */}
        <OrbitControls enableZoom={true} dampingFactor={0.05} />
      </Canvas>
    </Suspense>
  );
}
