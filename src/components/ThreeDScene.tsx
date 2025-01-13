import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x7E69AB, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create initial ticket shape
    const ticketGeometry = new THREE.BoxGeometry(2, 1, 0.1);
    const ticketMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x9b87f5,
      specular: 0x9b87f5,
      shininess: 30,
    });
    const ticket = new THREE.Mesh(ticketGeometry, ticketMaterial);
    scene.add(ticket);
    objectRef.current = ticket;

    // Animation state
    let currentShape = 'ticket';
    let morphProgress = 0;
    const morphDuration = 120; // frames

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (objectRef.current) {
        objectRef.current.rotation.x += 0.01;
        objectRef.current.rotation.y += 0.01;

        morphProgress++;
        if (morphProgress >= morphDuration) {
          morphProgress = 0;
          
          // Change shape
          if (currentShape === 'ticket') {
            const cameraGeometry = new THREE.CylinderGeometry(0.5, 0.8, 2, 32);
            const newMesh = new THREE.Mesh(cameraGeometry, ticketMaterial);
            scene.remove(objectRef.current);
            scene.add(newMesh);
            objectRef.current = newMesh;
            currentShape = 'camera';
          } else if (currentShape === 'camera') {
            const sticksGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
            const newMesh = new THREE.Mesh(sticksGeometry, ticketMaterial);
            scene.remove(objectRef.current);
            scene.add(newMesh);
            objectRef.current = newMesh;
            currentShape = 'sticks';
          } else {
            const ticketGeometry = new THREE.BoxGeometry(2, 1, 0.1);
            const newMesh = new THREE.Mesh(ticketGeometry, ticketMaterial);
            scene.remove(objectRef.current);
            scene.add(newMesh);
            objectRef.current = newMesh;
            currentShape = 'ticket';
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeDScene;