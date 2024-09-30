import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

const Cameras: React.FC = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      state.camera.position.x = cursorRef.current.x;
      state.camera.position.y = cursorRef.current.y;
      state.camera.lookAt(meshRef.current.position);
    }
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = {
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1, 5, 5, 5]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default Cameras;
