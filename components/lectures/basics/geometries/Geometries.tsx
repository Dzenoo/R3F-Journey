import React from "react";

const Geometries: React.FC = () => {
  const count = 50;
  const positionsArray = new Float32Array(count * 3 * 3);

  for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 4;
  }

  return (
    <>
      {/* <mesh>
        <boxGeometry args={[1, 1, 1, 5, 5, 5]} />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh> */}
      {/* <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh> */}
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positionsArray, 3]}
          />
        </bufferGeometry>
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
    </>
  );
};

export default Geometries;
