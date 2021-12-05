import React from 'react'
import { PlaneBufferGeometry } from 'three';

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.4} />
    </mesh>
  )
}

export default Floor;
