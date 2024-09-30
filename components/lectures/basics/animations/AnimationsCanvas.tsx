"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Animations from "./Animations";

const AnimationsCanvas: React.FC = () => {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
      <Animations />
    </Canvas>
  );
};

export default AnimationsCanvas;
