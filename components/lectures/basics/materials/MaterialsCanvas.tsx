"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Materials from "./Materials";

const MaterialsCanvas: React.FC = () => {
  return (
    <Canvas camera={{ fov: 75, position: [1, 1, 2], near: 0.1, far: 100 }}>
      <ambientLight color={0xffffff} intensity={1} />
      <pointLight color={0xffffff} intensity={30} position={[2, 3, 4]} />

      <Environment preset="city" />

      <OrbitControls enableDamping={true} />

      <Materials />
    </Canvas>
  );
};

export default MaterialsCanvas;
