import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls ,useGLTF } from '@react-three/drei'

const HeadsetCanvs = () => {
    const headset = useGLTF('./headset.gltf')
  return (
    <Canvas 
        shadows
        camera={{position : [400,-210,10] ,fov :1.5} }
        gl={{preserveDrawingBuffer : true}}
    >
        <Suspense fallback={<div color='white'>Loading</div>}>
            <OrbitControls enableZoom={false}
                  minPolarAngle={2*Math.PI / 3} // Restrict polar angle to between 60 and 120 degrees
                  maxPolarAngle={2* Math.PI /3}
                  minAzimuthAngle={Math.PI / 4} // Restrict azimuth angle to between -60 and 60 degrees
                  maxAzimuthAngle={Math.PI / 3}
                  enablePan={false}
                  autoRotate={true}
                  autoRotateSpeed={1.5}
            />
        <mesh position={[-4,-4.8, -4]} >
            <spotLight intensity={1} 
                position={[50,5,5]}
            />
               
        <hemisphereLight intensity={0.7} groundColor="black"/>
        <pointLight position={[1,2,5]} intensity={2}/>
        <primitive
            scale={50}
        object={headset.scene}/>
   </mesh>
        </Suspense>

    </Canvas>
   
  )
}
export default HeadsetCanvs