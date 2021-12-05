import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from 'react-spring/three';

// Chest Sound
import chestOpenSound from '../../assets/sound/open-chest.mp3';
import chestCloseSound from '../../assets/sound/close-chest.mp3';
const openChest = new Audio(chestOpenSound);
const closeChest = new Audio(chestCloseSound);

export default function Model({ open, setOpen, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('../../../coffre-minecraft.glb');

  const handleOpen = () => {
    setOpen(!open);
    openChest.volume = 0.3;
    closeChest.volume = 0.3;

    !open ? openChest.play() : closeChest.play();
  };

  const openChestAnimation = useSpring({
    rotation: open ? [0, 0,0] : [1.61, 0, 0],
    position: open ? [0, -1.5, 0] : [0, 0, 0],
  });

  return (
    <group onClick={handleOpen} ref={group} {...props} dispose={null}>
      <a.group rotation={openChestAnimation.position} name="Armature" position={[0, -0.99, 0]}>
        <primitive object={nodes.Bone} />
        <a.primitive
          rotation={openChestAnimation.rotation}
          object={nodes.Bone001}
        />
        <skinnedMesh
          castShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          skeleton={nodes.Cube.skeleton}
        />
      </a.group>
    </group>
  )
}

useGLTF.preload('../../../coffre-minecraft.glb')
