import { Suspense,useEffect,useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,useGLTF } from "@react-three/drei";
import CanvasLoader from './Loader'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const Car = () => {
    const car = useGLTF("../bentley_car/scene.gltf");
  
    return (
      <mesh>
        {/* Ambient light */}
        <ambientLight intensity={0.2} />
  
        {/* Hemisphere light */}
        <hemisphereLight intensity={0.6} skyColor="white" groundColor="black" />
  
        {/* Directional light */}
        <directionalLight
          position={[0, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
  
        {/* Point lights */}
        <pointLight position={[-10, 5, -5]} intensity={0.8} />
        <pointLight position={[10, 5, -5]} intensity={0.8} />
  
        {/* Additional point lights on the sides */}
        <pointLight position={[-5, 5, 0]} intensity={1.2} />
        <pointLight position={[5, 5, 0]} intensity={1.2} />
        <pointLight position={[-5, 5, -10]} intensity={1.2} />
        <pointLight position={[5, 5, -10]} intensity={1.2} />
  
        {/* Spot lights */}
        <spotLight
          position={[0, 10, 10]}
          angle={Math.PI / 4}
          penumbra={0.2}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[0, 10, -10]}
          angle={Math.PI / 4}
          penumbra={0.2}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
  
        {/* Spotlights specifically for the wheels */}
        <spotLight
          position={[-3, -95, -6]}
          angle={Math.PI / 2}
          penumbra={0.2}
          intensity={2}
          material={{
            color: "white",
            specular: 100,
            shininess: 100,
          }}
        />
        <spotLight
          position={[3, -95, -6]}
          angle={Math.PI / 2}
          penumbra={0.2}
          intensity={2}
          material={{
            color: "white",
            specular: 100,
            shininess: 100,
          }}
        />
        <spotLight
          position={[-3, -95, -4]}
          angle={Math.PI / 2}
          penumbra={0.2}
          intensity={2}
          material={{
            color: "white",
            specular: 100,
            shininess: 100,
          }}
        />
        <spotLight
          position={[3, -95, -4]}
          angle={Math.PI / 2}
          penumbra={0.2}
          intensity={2}
          material={{
            color: "white",
            specular: 100,
            shininess: 100,
          }}
        />
     <primitive
          object={car.scene}
          scale={0.1}
          position={[0, -100, -5]}
          rotation={[0, 0, 0]}
        />
      </mesh>
    );
  };







  const CarCanvas = () => {
    return (
        <Canvas frameloop='demand'
    shadows
    camera={{position:[5,15,-500], fov:50}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          />
          <Car />
      </Suspense>
      <Preload all/>
    </Canvas>
      );
}
 
export default CarCanvas
