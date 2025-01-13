import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraModelRef = useRef<THREE.Group | null>(null);

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

    const directionalLight = new THREE.DirectionalLight(0xFFD700, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create vintage camera model
    const cameraGroup = new THREE.Group();

    // Main body
    const bodyGeometry = new THREE.BoxGeometry(2, 1.5, 1);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFD700,
      specular: 0xFFFFFF,
      shininess: 30,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    cameraGroup.add(body);

    // Lens
    const lensGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32);
    const lensMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFD700,
      specular: 0xFFFFFF,
      shininess: 50,
    });
    const lens = new THREE.Mesh(lensGeometry, lensMaterial);
    lens.rotation.x = Math.PI / 2;
    lens.position.z = 0.9;
    cameraGroup.add(lens);

    // Viewfinder
    const viewfinderGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const viewfinder = new THREE.Mesh(viewfinderGeometry, bodyMaterial);
    viewfinder.position.y = 0.75;
    cameraGroup.add(viewfinder);

    scene.add(cameraGroup);
    cameraModelRef.current = cameraGroup;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (cameraModelRef.current) {
        cameraModelRef.current.rotation.y += 0.005;
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