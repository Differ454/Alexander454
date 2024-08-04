// LegoCanvas.jsx
import "./NaveCanvas.css";
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


//Function Red astrounaut -->

const Avatar = () => {
    // camera function

    useEffect(() => {

    const canvasContainer = document.querySelector("#canvasContainerAvatar");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        70,
        canvasContainer.offsetWidth / canvasContainer.offsetHeight,
        0.1,
        1000
    );
    console.log(scene);

    //function to render

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: document.querySelector("#canvasContainerAvatar"), //--> to improve the image
        alpha: true,
    });

    //OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = -5.8;
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

    //Responsive Desing with Three Js

    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

    var loader = new GLTFLoader();
    loader.load("/assets/img/avatar/scene.gltf", function (gltf) {
        const model = gltf.scene;

        scene.add(model);

        model.position.x = 180;
    });

    camera.position.z = 290;
    camera.position.y = 130;

    const mouse = {
        x: undefined,
        y: undefined,
    };

    //animate function
    const animate = () => {
        orbitControls.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    // Light

    const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientalLight);

    const PointLight = new THREE.PointLight(0xfffffff, 4);
    PointLight.position.set(30, 60, 50);  // 6, 7, 6
    scene.add(PointLight);

    animate();

    return () => {
        window.removeEventListener("resize", resizeHandler);
        renderer.dispose();
    };
}, []);

return null;
};

export default Avatar;