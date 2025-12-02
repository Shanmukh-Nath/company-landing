// src/components/FloatingSphere.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

function HighResSphere() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y += 0.004;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 96, 96]} />
      <meshStandardMaterial
        color="#a92427"
        metalness={0.5}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
}

export default function FloatingSphere() {
  return (
    <Canvas dpr={[1.5, 2.5]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={1} />
      <HighResSphere />
      <Environment preset="studio" />
    </Canvas>
  );
}
