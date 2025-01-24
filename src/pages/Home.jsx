import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Setup from '../models/setup'
import { useState } from 'react'

const Home = () => {
  const [isRotating,setIsRotating] = useState(false);
  const adjustModelForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -50, 0];
    let rotation = [0.2, 4.5, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [100, 100, 100];
    }
    return { screenScale, screenPosition, rotation };
  };

  const { screenScale, screenPosition, rotation } = adjustModelForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[-7, 1, 1]} intensity={1.5} />
          <ambientLight intensity={-0.05} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <hemisphereLight skyColor={'white'} groundColor={'brown'} intensity={0.5} />
          <mesh position={[0, 0, -140]}>
            <planeGeometry args={[500, 500]} />
            <meshBasicMaterial color='#ffffff' />
          </mesh>
          <Setup position={screenPosition} scale={screenScale} rotation={rotation} setIsRotating={setIsRotating} isRotating={isRotating} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home