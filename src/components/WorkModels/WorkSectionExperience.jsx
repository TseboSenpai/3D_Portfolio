import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import LaptopLights from './LaptopLights.jsx'
import { WhiteLaptop } from './White_laptop.jsx';
import Particles from '../HeroModels/Particles.jsx';

const WorkSectionExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
      />
  
  <LaptopLights />
  <Particles count ={100} />
  <group
   scale={isMobile? 12 : 20}
   position={[0, 0, 0]}
   rotation={[0, -Math.PI /4, 0]}
  >
    <WhiteLaptop />
  </group>

    </Canvas>
  )
}

export default WorkSectionExperience