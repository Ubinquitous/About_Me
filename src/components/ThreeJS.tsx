import React from "react";
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";


const Model = () => {
  const gltf = useLoader(GLTFLoader, "/model/cuteMushroom/scene.gltf")
  return (
    <>
      <primitive position={[0, 0, 0]} object={gltf.scene} scale={0.3} />
    </>
  );
};


const ThreeJS = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      camera={{
        position: [0, 3, 0],
      }}
    >
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <spotLight position={[0, 0, 0]} angle={0.3} />
      <Model />
    </Canvas>
  )
}

export default ThreeJS;