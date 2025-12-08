import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 3000, mouse }: { count?: number; mouse: React.MutableRefObject<[number, number]> }) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.elapsedTime;
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.03;
    
    ref.current.position.x = mouse.current[0] * 0.5;
    ref.current.position.y = -mouse.current[1] * 0.5;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingShapes() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
  });

  return (
    <group ref={meshRef}>
      <mesh position={[3, 2, -5]}>
        <octahedronGeometry args={[0.5]} />
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh position={[-4, -1, -3]}>
        <icosahedronGeometry args={[0.7]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh position={[2, -3, -4]}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshBasicMaterial color="#bf00ff" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function ParticleField() {
  const mouseRef = useRef<[number, number]>([0, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = [
      (e.clientX / window.innerWidth) * 2 - 1,
      (e.clientY / window.innerHeight) * 2 - 1,
    ];
  };

  return (
    <div 
      className="absolute inset-0 z-0" 
      onMouseMove={handleMouseMove}
      data-testid="particle-field"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0a0a0f"]} />
        <fog attach="fog" args={["#0a0a0f", 5, 25]} />
        <ambientLight intensity={0.5} />
        <Particles count={2000} mouse={mouseRef} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
