import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CircuitBackground = () => {
  const { viewport } = useThree();
  const count = 40; // Number of circuit paths
  const nodesRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const pulsesRef = useRef<THREE.Points>(null!);

  // Generate circuit paths
  const { linePositions, nodePositions, pulsePaths } = useMemo(() => {
    const lines: number[] = [];
    const nodes: number[] = [];
    const pulses: { path: THREE.Vector3[]; progress: number; speed: number }[] = [];

    const gridSize = 10;
    const step = 0.5;

    for (let i = 0; i < count; i++) {
      let x = (Math.floor(Math.random() * (gridSize * 2)) - gridSize) * step;
      let y = (Math.floor(Math.random() * (gridSize * 2)) - gridSize) * step;
      let z = (Math.random() - 0.5) * 2;

      const path: THREE.Vector3[] = [new THREE.Vector3(x, y, z)];
      const segments = 5 + Math.floor(Math.random() * 5);

      for (let j = 0; j < segments; j++) {
        const axis = Math.random() > 0.5 ? 'x' : 'y';
        const dir = Math.random() > 0.5 ? 1 : -1;
        
        if (axis === 'x') x += dir * step;
        else y += dir * step;

        const nextPoint = new THREE.Vector3(x, y, z);
        lines.push(path[path.length - 1].x, path[path.length - 1].y, path[path.length - 1].z);
        lines.push(nextPoint.x, nextPoint.y, nextPoint.z);
        
        path.push(nextPoint);
        nodes.push(nextPoint.x, nextPoint.y, nextPoint.z);
      }

      pulses.push({
        path,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003
      });
    }

    return {
      linePositions: new Float32Array(lines),
      nodePositions: new Float32Array(nodes),
      pulsePaths: pulses
    };
  }, []);

  const pulsePositions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((state) => {
    const mouse = state.mouse;
    const time = state.clock.getElapsedTime();

    // Update pulses
    for (let i = 0; i < count; i++) {
      const p = pulsePaths[i];
      p.progress += p.speed;
      if (p.progress >= 1) p.progress = 0;

      const segmentCount = p.path.length - 1;
      const totalProgress = p.progress * segmentCount;
      const segmentIndex = Math.floor(totalProgress);
      const segmentProgress = totalProgress - segmentIndex;

      const start = p.path[segmentIndex];
      const end = p.path[segmentIndex + 1];

      if (start && end) {
        const px = THREE.MathUtils.lerp(start.x, end.x, segmentProgress);
        const py = THREE.MathUtils.lerp(start.y, end.y, segmentProgress);
        const pz = THREE.MathUtils.lerp(start.z, end.z, segmentProgress);
        
        pulsePositions[i * 3] = px;
        pulsePositions[i * 3 + 1] = py;
        pulsePositions[i * 3 + 2] = pz;

        // Pulse interaction: glow brighter when near mouse
        // Note: mouse coords are -1 to 1, we need to map them to world space roughly
        const mx = mouse.x * 5;
        const my = mouse.y * 5;
        const dx = px - mx;
        const dy = py - my;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        // We can't easily change individual point sizes in a single Points object without a shader,
        // but we can make the whole group react or just accept the current logic.
      }
    }
    pulsesRef.current.geometry.attributes.position.needsUpdate = true;

    // Interaction logic for lines and nodes
    const nodeMaterial = nodesRef.current.material as THREE.PointsMaterial;
    const lineMaterial = linesRef.current.material as THREE.LineBasicMaterial;
    const pulseMaterial = pulsesRef.current.material as THREE.PointsMaterial;
    
    // Pulse brightness oscillation + mouse interaction
    pulseMaterial.opacity = 0.6 + Math.sin(time * 2) * 0.2;
    
    // Global reactivity to mouse movement
    const mouseIntensity = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
    nodeMaterial.opacity = 0.1 + (1 - mouseIntensity) * 0.4;
    lineMaterial.opacity = 0.05 + (1 - mouseIntensity) * 0.1;
    
    // Subtle rotation based on mouse
    nodesRef.current.rotation.y = mouse.x * 0.05;
    nodesRef.current.rotation.x = -mouse.y * 0.05;
    linesRef.current.rotation.y = mouse.x * 0.05;
    linesRef.current.rotation.x = -mouse.y * 0.05;
    pulsesRef.current.rotation.y = mouse.x * 0.05;
    pulsesRef.current.rotation.x = -mouse.y * 0.05;
  });

  return (
    <group scale={[viewport.width / 10, viewport.height / 10, 1]}>
      {/* Static Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f2ff" transparent opacity={0.1} />
      </lineSegments>

      {/* Static Nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00f2ff"
          transparent
          opacity={0.3}
          sizeAttenuation
        />
      </points>

      {/* Moving Pulses */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={pulsePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#bc13fe"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Bokeh / Background Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={new Float32Array(Array.from({ length: 300 }, () => (Math.random() - 0.5) * 20))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00f2ff"
          transparent
          opacity={0.1}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export default CircuitBackground;
