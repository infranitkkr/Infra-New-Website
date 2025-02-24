import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import Particles from "./Particles";
import Threads from "./Threads";

// Constellation: renders a series of points connected by lines
const Constellation = () => {
  const groupRef = useRef();

  // Define constellation points (modify these coordinates as desired)
  const points = [
    [0, 0, 0],
    [1, 1, 1],
    [-1, 1, 0],
    [0, -1, 1],
    [1, -1, -1],
    [-1, -1, 1],
  ];

  // Create geometry for connecting lines between the points
  const lineGeometry = new THREE.BufferGeometry();
  const positions = [];
  for (let i = 0; i < points.length - 1; i++) {
    positions.push(...points[i]);
    positions.push(...points[i + 1]);
  }
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  return (
    <group ref={groupRef}>
      {/* Render small spheres at each point */}
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
      {/* Render lines connecting the points */}
      <line>
        <bufferGeometry attach="geometry" {...lineGeometry} />
        <lineBasicMaterial color="white" linewidth={2} />
      </line>
    </group>
  );
};

// InfinityStone: a clickable animated stone (e.g. an Infinity Stone)
function InfinityStone({ color, position, onClick }) {
  return (
    <mesh position={position} onClick={onClick}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
    </mesh>
  );
}

// RobotModel: a sample 3D model containing InfinityStone(s)
// You can add more stones or additional animations as needed.
function RobotModel() {
  const handleStoneClick = (stone) => {
    if (stone === "purple") {
      // Trigger some effect when the purple stone is clicked.
      console.log("Purple Infinity Stone clicked!");
      // For example, you might want to change state to increase glow intensity.
    }
  };

  return (
    <group>
      {/* The InfinityStone is positioned at [1, 1, 1]. Adjust the coordinates as needed */}
      <InfinityStone
        color="purple"
        position={[1, 1, 1]}
        onClick={() => handleStoneClick("purple")}
      />
      {/* Add more stones or elements here */}
    </group>
  );
}

// Scene: wraps the 3D Canvas background with lights, stars, constellation, and robot model.
const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ height: "100%", width: "100%" }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
      {/* Constellation overlay */}
     
      
      {/* Animated 3D model (InfinityStone inside RobotModel) */}
      <RobotModel />

      {/* OrbitControls allow interactive camera movement */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

// ThemePage: main component integrating the 3D scene (Canvas) and the overlay components.
export default function ThemePage() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black a absolutew-full">
      {/* 3D Scene background */}
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
        <Scene />
      </div>

      {/* Particles overlay */}
      <Particles
        particleCount={2050}
        particleSprad={64}
        speed={0.15}
        alphaParticles={false}
        moveParticlesOnHover={false}
        particleBaseSize={40}
        sizeRandomness={1.1}
        glowEffect={1.3}
        className="absolute top-0 left-0 w-full h-full z-[2]"
      />

      {/* Threads overlay */}
      <Threads
        color={[1, 1, 1]}
        amplitude={2.6}
        distance={0.9}
        enableMouseInteraction
        className="absolute top-0 left-0 w-full h-full z-[1] mix-blend-screen"
      />
    </div>
  );
}
