// EarthCanvas.jsx
import "./EarthCanvas.css";
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";

const EarthCanvas = () => {
    useEffect(() => {
        const canvasContainer = document.querySelector("#canvasContainer");
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

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableRotate = false; // Disable rotation
        controls.enablePan = false; // Disable panning
        controls.enableZoom = false;

        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });

        window.addEventListener("resize", resizeHandler);
        resizeHandler(); // Initial call to set sizes

        renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50),
            new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    globeTexture: {
                        value: new THREE.TextureLoader().load("/assets/img/earth/globe.jpg"),
                    },
                },
            })
        );

        const atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50),
            new THREE.ShaderMaterial({
                vertexShader: atmosphereVertexShader,
                fragmentShader: atmosphereFragmentShader,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
            })
        );

        atmosphere.scale.set(1.1, 1.1, 1.2);
        scene.add(atmosphere);

        scene.add(sphere);

        camera.position.z = 15.6;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotateY(0.0002 * Math.PI);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeHandler);
            renderer.dispose();
        };
    }, []);

    return null;
};

export default EarthCanvas;
