import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useRef } from "react";
import { Mesh } from "three";

const Animations: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    const { clock } = state;

    if (meshRef.current) {
      gsap.to(meshRef.current.position, { duration: 1, x: 2, delay: 1 });

      meshRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default Animations;
