"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Geometries from "./Geometries";
import { OrbitControls } from "@react-three/drei";

const GeometriesCanvas: React.FC = () => {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 5], near: 0.1, far: 100 }}>
      <OrbitControls enableDamping={true} />
      <Geometries />
    </Canvas>
  );
};

export default GeometriesCanvas;
