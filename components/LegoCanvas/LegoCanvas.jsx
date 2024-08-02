// LegoCanvas.jsx
import "./LegoCanvas.css";
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const LegoCanvas = () => {
    useEffect(() => {
        const canvasContainer = document.querySelector("#canvasContainerLego");
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            98.2,
            canvasContainer.offsetWidth / canvasContainer.offsetHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: canvasContainer,
            alpha: true,
        });

        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = false;
        orbitControls.autoRotate = true;
        orbitControls.autoRotateSpeed = 2.0;
        orbitControls.enableZoom = false;
        orbitControls.enableRotate = false; // Disable rotation
        orbitControls.enablePan = false; // Disable panning



        const resizeHandler =  () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener("resize", resizeHandler);
         resizeHandler(); // Initial call to set sizes

        renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const loader = new GLTFLoader();
        loader.load("/assets/img/LegoAstronauts/scene.gltf", (gltf) => {
            const model = gltf.scene;
            scene.add(model);
        });

        camera.position.set(7, -1.8, 4);

        const animate = () => {
            requestAnimationFrame(animate);
            orbitControls.update();
            renderer.render(scene, camera);
        };

        const ambientalLight = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambientalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(50, 50, 50);
        scene.add(pointLight);

        animate();

        return () => {
            window.removeEventListener("resize", resizeHandler);
            renderer.dispose();
        };
    }, []);

    return null;
};

export default LegoCanvas;
