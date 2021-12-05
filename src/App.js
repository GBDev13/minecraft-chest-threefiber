import React, { Suspense, useState } from "react";
//Styles
import "./assets/styles/App.scss";
//Three
import { Canvas, useThree } from 'react-three-fiber';
import Lights from './components/Three/lights';
import Floor from './components/Three/floor';
import { softShadows, Loader, OrbitControls } from "@react-three/drei";
//Model
import Model from './components/Three/chest';
import { useSpring } from "react-spring";
// Chest Modal
import ChestModal from './components/chestModal';

softShadows();

// on load zoom effect
const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();
  useSpring({
    from: {
      z: 30
    },
    x: -5,
    y: 4,
    z: 4,
    // On Frame
    onFrame: ({ x,y,z }) => {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;
    }
  });

  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      target={[0,0,0]}
      args={[camera, gl.domElement]}
    />
  )
};

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Model open={open} setOpen={setOpen} />
          <Floor />
          <ZoomWithOrbital />
        </Suspense>
      </Canvas>
      <Loader />
      <ChestModal />
    </>
  );
};

export default App;
