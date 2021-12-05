import React from 'react'

const Lights = () => {
  return (
    <>
      <fog attach="fog" args={['#fff', 0, 22]}/>
      <ambientLight intensity={0.4}/>
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-mapSize-far={50}
        shadow-mapSize-left={-10}
        shadow-mapSize-right={10}
        shadow-mapSize-top={10}
        shadow-mapSize-bottom={-10}
      />
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  )
}

export default Lights;
