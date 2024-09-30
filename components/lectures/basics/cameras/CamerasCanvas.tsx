"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Cameras from "./Cameras";
import {
  DragControls,
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
  TransformControls,
} from "@react-three/drei";

const CamerasCanvas: React.FC = () => {
  const aspectRatio = 16 / 9;

  return (
    <Canvas
      camera={{
        fov: 75,
        position: [0, 0, 5],
        near: 0.1,
        far: 100,
        aspect: aspectRatio,
      }}
    >
      {/* <OrthographicCamera
        makeDefault
        left={-1 * aspectRatio}
        right={1 * aspectRatio}
        top={1}
        bottom={-1}
        near={0.1}
        far={100}
        position={[0, 0, 2]}
      /> */}
      {/* <FlyControls /> */}
      {/* <FirstPersonControls /> */}
      {/* <PointerLockControls /> */}
      {/* <OrbitControls  /> */}
      {/* <TrackballControls /> */}
      {/* <TransformControls /> */}
      {/* <DragControls>
        <Cameras />
      </DragControls> */}
      <Cameras />
    </Canvas>
  );
};

export default CamerasCanvas;
