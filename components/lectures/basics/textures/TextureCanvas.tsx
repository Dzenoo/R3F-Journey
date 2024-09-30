"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Textures from "./Textures";

const TextureCanvas: React.FC = () => {
  return (
    <Canvas camera={{ fov: 75, position: [1, 1, 1], near: 0.1, far: 100 }}>
      <OrbitControls enableDamping={true} />
      <Textures />
    </Canvas>
  );
};

export default TextureCanvas;
