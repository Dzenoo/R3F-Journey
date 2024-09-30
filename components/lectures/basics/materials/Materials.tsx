import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const Materials: React.FC = () => {
  return (
    <group>
      <mesh position={[-1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 64, 64]} />
        <Material />
      </mesh>
      <mesh>
        <planeGeometry args={[1, 1, 100, 100]} />
        <Material />
      </mesh>
      <mesh position={[1.5, 0, 0]}>
        <torusGeometry args={[0.3, 0.2, 64, 128]} />
        <Material />
      </mesh>
    </group>
  );
};

const Material = () => {
  const colorTexture = useTexture("/textures/door/color.jpg");
  const alphaTexture = useTexture("/textures/door/alpha.jpg");
  const ambientOcclusionTexture = useTexture(
    "/textures/door/ambientOcclusion.jpg"
  );
  const heightTexture = useTexture("/textures/door/height.jpg");
  const normalTexture = useTexture("/textures/door/normal.jpg");
  const metalnessTexture = useTexture("/textures/door/metalness.jpg");
  const roughnessTexture = useTexture("/textures/door/roughness.jpg");

  colorTexture.colorSpace = THREE.SRGBColorSpace;

  /* <meshBasicMaterial
          map={colorTexture}
          color={"#ff0000"}
          wireframe
          transparent
          opacity={0.5}
          alphaMap={alphaTexture}
          side={THREE.DoubleSide}
        />
  */
  /* <meshNormalMaterial flatShading /> */
  /* <meshDepthMaterial /> */
  /* <meshLambertMaterial /> */
  /* <meshPhongMaterial shininess={100} specular={"#ff0000"} /> */
  /* <meshStandardMaterial
          metalness={1}
          roughness={1}
          map={colorTexture}
          aoMap={ambientOcclusionTexture}
          aoMapIntensity={1}
          displacementMap={heightTexture}
          displacementScale={0.1}
          metalnessMap={metalnessTexture}
          roughnessMap={roughnessTexture}
          normalMap={normalTexture}
          transparent
          alphaMap={alphaTexture}
        /> */

  return (
    <meshPhysicalMaterial
      metalness={0}
      roughness={0.15}
      map={colorTexture}
      aoMap={ambientOcclusionTexture}
      aoMapIntensity={1}
      displacementMap={heightTexture}
      displacementScale={0.1}
      metalnessMap={metalnessTexture}
      roughnessMap={roughnessTexture}
      normalMap={normalTexture}
      transparent
      alphaMap={alphaTexture}
      // CLEARCOAT
      clearcoat={1}
      clearcoatRoughness={0}
      // SHEEN
      sheen={1}
      sheenRoughness={0.25}
      sheenColor={"#ff0000"}
      // IRIDESCENCE
      iridescence={1}
      iridescenceIOR={1.233}
      iridescenceThicknessRange={[100, 800]}
      // TRANSMISSION
      transmission={1}
      ior={1.5}
      thickness={0.5}
    />
  );
};

export default Materials;
