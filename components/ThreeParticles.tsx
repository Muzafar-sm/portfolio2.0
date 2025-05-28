'use client';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import type { Vector3 } from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

interface ParticlesProps {
  mouse: Vector3;
  scrollY: number;
  velocity: number;
}

const Particles = ({ mouse, scrollY, velocity }: ParticlesProps) => {
  const particlesRef = useRef<any>();
  const count = 5000;

  const positionsArray = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, []);

  const positions = useRef<Float32Array>(positionsArray);

  useFrame(() => {
    if (particlesRef.current) {
      // Subtle continuous rotation
      particlesRef.current.rotation.x -= 0.001;
      particlesRef.current.rotation.y -= 0.0015;

      // Compute dynamic lerp factor from velocity
      const lerpFactor = THREE.MathUtils.clamp(velocity * 2, 0.01, 0.2);

      const targetX = mouse.x * 0.01;
      const targetY = mouse.y * 0.01 + scrollY * 0.0000002;

      particlesRef.current.position.x = THREE.MathUtils.lerp(
        particlesRef.current.position.x,
        targetX,
        lerpFactor
      );

      particlesRef.current.position.y = THREE.MathUtils.lerp(
        particlesRef.current.position.y,
        targetY,
        lerpFactor
      );
    }
  });

  return (
    <Points ref={particlesRef} positions={positions.current}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.005}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const ShootingStar = () => {
  const starRef = useRef<any>();
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const edge = Math.random() > 0.5 ? 1 : -1;
      const startX = (Math.random() - 0.5) * 2 * edge;
      const startY = (Math.random() - 0.5) * 2 * edge;

      setPosition({ x: startX, y: startY, z: 0 });
      setVisible(true);

      setTimeout(() => setVisible(false), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (starRef.current && visible) {
      starRef.current.position.x += 0.02;
      starRef.current.position.y -= 0.02;
    }
  });

  if (!visible) return null;

  const trailPositions = new Float32Array(5 * 3);
  for (let i = 0; i < 5; i++) {
    trailPositions[i * 3] = position.x - i * 0.02;
    trailPositions[i * 3 + 1] = position.y + i * 0.02;
    trailPositions[i * 3 + 2] = position.z;
  }

  return (
    <Points ref={starRef} positions={trailPositions}>
      <PointMaterial
        color="#4fc3f7"
        size={0.03}
        sizeAttenuation={false}
        depthWrite={false}
      />
    </Points>
  );
};

const SunRayMaterial = shaderMaterial(
  {
    time: 0,
    opacity: 1,
    color: new THREE.Color('#ffff70'),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform float opacity;
    uniform vec3 color;
    varying vec2 vUv;
    
    void main() {
      // Radial gradient
      float dist = distance(vUv, vec2(0.5));
      float gradient = smoothstep(0.5, 0.0, dist);
      
      // Glow effect
      float glow = 0.05 / dist;
      
      // Combine effects with animation
      float alpha = gradient * glow * opacity;
      
      // Final color with pulsing effect
      vec3 finalColor = color * (0.8 + 0.2 * sin(time));
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

extend({ SunRayMaterial });

const LightRay = () => {
    const groupRef = useRef<any>();
    const materialRef = useRef<any>();
  
    useFrame((state) => {
      if (groupRef.current) {
        groupRef.current.rotation.z += 0.001;
      }
  
      if (materialRef.current) {
        const time = state.clock.getElapsedTime();
        materialRef.current.time = time;
  
        // Pulse the opacity between 0.2 and 0.7
        materialRef.current.opacity = 0.45 + 0.25 * Math.sin(time * 1.5);
      }
    });
  
    return (
      <group ref={groupRef}>
        <mesh position={[-1.5, 1.5, -1]}>
          <planeGeometry args={[3, 3]} />
          <primitive object={new SunRayMaterial()} ref={materialRef} transparent attach="material" />
        </mesh>
      </group>
    );
  };
  
  

// Update the ShootingStar component to create multiple stars
const ShootingStars = () => {
  const stars = useMemo(() => {
    return Array(3).fill(0).map((_, i) => ({
      id: i,
      delay: i * 1000,
      speed: 0.02 + Math.random() * 0.01
    }));
  }, []);

  return (
    <>
      {stars.map(star => (
        <ShootingStar key={star.id} />
      ))}
    </>
  );
};

export default function ThreeParticles() {
  const [mouse, setMouse] = useState<Vector3>(new THREE.Vector3());
  const [scrollY, setScrollY] = useState(0);
  const mouseVelocityRef = useRef(0);
  const prevMouseRef = useRef<Vector3>(new THREE.Vector3());

  const handleMouseMove = (e: MouseEvent) => {
    const newMouse = new THREE.Vector3(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1,
      0
    );

    const prev = prevMouseRef.current;
    const velocity = newMouse.distanceTo(prev);
    mouseVelocityRef.current = velocity;

    prevMouseRef.current = newMouse;
    setMouse(newMouse);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles mouse={mouse} scrollY={scrollY} velocity={mouseVelocityRef.current} />
        <ShootingStars />
        <LightRay />
      </Canvas>
    </div>
  );
}
