import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function NeonTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.8} />
      </mesh>
    </Float>
  );
}

function NeonSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function NeonCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

function CenterPiece() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <MeshDistortMaterial
          color="#ff00ff"
          wireframe
          transparent
          opacity={0.8}
          distort={0.2}
          speed={3}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#050508", 8, 30]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#ff00ff" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={1} />
      
      <CenterPiece />
      
      <NeonTorus position={[-4, 2, -3]} color="#00ffff" />
      <NeonTorus position={[4, -1, -2]} color="#ff00ff" />
      <NeonSphere position={[-3, -2, -4]} color="#bf00ff" />
      <NeonSphere position={[3, 3, -5]} color="#00ff88" />
      <NeonCube position={[5, 0, -4]} color="#ff00ff" />
      <NeonCube position={[-5, 1, -3]} color="#00ffff" />
      
      <Sparkles
        count={200}
        scale={15}
        size={2}
        speed={0.5}
        color="#ff00ff"
      />
      <Sparkles
        count={200}
        scale={15}
        size={1.5}
        speed={0.3}
        color="#00ffff"
      />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function RaveRoom() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <div className="relative w-full h-[600px] md:h-[700px]" data-testid="rave-room">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      
      {!isEntered && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <button
            onClick={() => setIsEntered(true)}
            className="group relative px-8 py-4 font-display text-xl uppercase tracking-wider text-neon-cyan border border-neon-cyan/50 rounded-md overflow-hidden transition-all duration-300 hover:border-neon-cyan hover:shadow-neon-cyan"
            data-testid="button-enter-rave"
          >
            <span className="relative z-10">Enter the Rave</span>
            <div className="absolute inset-0 bg-neon-cyan/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      )}
    </div>
  );
}
