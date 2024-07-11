// SateliteCanvas.jsx
import "./SateliteCanvas.css";
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const SateliteCanvas = () => {
    useEffect(() => {
        const canvasContainer = document.querySelector("#canvasContainerSatelite");
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            70,
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
        orbitControls.enableDamping = true;
        orbitControls.autoRotate = true;
        orbitControls.autoRotateSpeed = -0.5;
        orbitControls.enableZoom = false;

        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });

        renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const loader = new GLTFLoader();
        loader.load("/assets/img/SateliteFinal/scene.gltf", (gltf) => {
            const model = gltf.scene;
            scene.add(model);
        });

        camera.position.set(3.5, 1, 0);

        const animate = () => {
            requestAnimationFrame(animate);
            orbitControls.update();
            renderer.render(scene, camera);
        };

        const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientalLight);

        const pointLight = new THREE.PointLight(0xfffffff, 1);
        pointLight.position.set(30, 50, 50);
        scene.add(pointLight);

        animate();

        return () => {
            renderer.dispose();
        };
    }, []);

    return null;
};

export default SateliteCanvas;
