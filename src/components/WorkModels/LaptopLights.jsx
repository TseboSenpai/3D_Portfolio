import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three';

const LaptopLights = () => {
  const keyLight = useRef();
  
  useFrame(({ clock }) => {
    keyLight.current.position.x = Math.sin(clock.getElapsedTime() * 0.4) * 2;
  });

  return (
    <>
      {/* Soft base illumination */}
      <ambientLight intensity={1.2} />
      <hemisphereLight intensity={0.8} groundColor={'#222222'} color={'#ffffff'} />

      {/* Main key light */}
      <directionalLight
        ref={keyLight}
        intensity={3.5}
        position={[8, 12, 10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={40}
      />

      {/* Fill from left */}
      <directionalLight 
        intensity={1.8}
        position={[-10, 6, 6]}
      />

      {/* Front fill to illuminate the laptop body */}
      <pointLight
        intensity={1.6}
        position={[0, 3, 10]}
        distance={25}
        decay={2}
      />

      {/* Bottom glow to light the laptop base */}
      <pointLight
        intensity={1.2}
        position={[0, -2, 3]}
        distance={20}
        decay={2}
      />

      {/* Back rim light for silhouette */}
      <directionalLight 
        intensity={0.9}
        position={[0, 5, -10]}
      />
    </>
  );
}

export default LaptopLights;
