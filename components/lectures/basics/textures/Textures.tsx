import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Textures: React.FC = () => {
  const texture = useTexture("/textures/minecraft.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Textures;
