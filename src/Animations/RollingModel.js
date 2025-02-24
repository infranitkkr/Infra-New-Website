import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

function AnimatedModel({ url, position = [0, 0, 0], scale = [2, 2, 2] }) {
  const modelRef = useRef();
  const geometry = useLoader(STLLoader, url);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.z += delta * 0.9;
    }
  });

  return (
    <mesh ref={modelRef} geometry={geometry} position={position} scale={scale}>
      <meshStandardMaterial color="gray" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

export default function RollingModel() {
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const canvasStyle = {
    height: isMobile ? '400px' : '600px',
    width: '100%',
    touchAction: 'auto'
  };

  return (
    <Suspense fallback={<div style={{ color: 'white' }}>Loading 3D Models...</div>}>
      <Canvas camera={{ position: [0, -430, 100] }} style={canvasStyle}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 115]} intensity={3} />
        <AnimatedModel url="/eiffel_final.stl" position={[0, -10, -90]} scale={[5, 5, 3]} />        
        {!isMobile && <OrbitControls enableZoom={false} dampingFactor={0} />}
      </Canvas>
    </Suspense>
  );
}
