import React, { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";


const Model = () => {
  const cubeRef = useRef(null);
  const gltf = useLoader(GLTFLoader, "/model/monument_valley_fan_art/scene.gltf")

  useFrame((state, delta, frame) => {
    // const mesh = gltf.scene.children[0];
    // mesh.rotation.y = mesh.rotation.y += 0.01;
    // mesh.rotation.x = state.clock.getElapsedTime();
  });

  return (
    <>
      <primitive ref={cubeRef} position={[0, 0, 0]} object={gltf.scene} scale={1} />
    </>
  );
};


const ThreeJS = () => {
  return (
    <Canvas style={{ width: '30vw', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}
      camera={{
        position: [0, 2, 0],
      }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <spotLight position={[0, 0, 0]} angle={0.3} />
      <Model />
    </Canvas>
  )
}

export default ThreeJS;