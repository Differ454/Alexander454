import "./3DModel.css";
//import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import * as THREE from 'three'
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


 
//First commit to test te branch connection with github

//Function LegoAstronauts -->

const LegoAstronauts = () => {
  // camera function
  //test useEffect
  

  const canvasContainer = document.querySelector("#canvasContainerLego");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    98.2,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
  );
  console.log(scene);

  //function to render

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#canvasContainerLego"), //--> to improve the image
    alpha: true,
  });

  //OrbitControls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = 0.9;
  orbitControls.enableZoom = false;
  
  //test

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  var loader = new GLTFLoader();
  loader.load("/assets/img/LegoAstronauts/scene.gltf", function (gltf) {
    const model = gltf.scene;

    scene.add(model);
  });

  camera.position.z = 4;
  camera.position.y = -1.8;
  camera.position.x = 7;

  const mouse = {
    x: undefined,
    y: undefined,
  };

  //animate function
  const animate = () => {
    requestAnimationFrame(animate);
    orbitControls.update();
    renderer.render(scene, camera);
    // Rotation
    //loader.rotation.y += 0.004;
    
  };

  

  // Light

  const ambientalLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientalLight);

  const PointLight = new THREE.PointLight(0xffffff, 1);
  PointLight.position.set(50, 50, 50); // (6, 7, 6); 
  scene.add(PointLight);

  animate();

  // function to move the mouse

  addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  });
  // scene.add(sphere);


};



//Function Earth -->

const Earth = () => {
  // camera function
  const canvasContainer = document.querySelector("#canvasContainer");
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
    canvas: document.querySelector("canvas"), //--> to improve the image
    alpha: true,
  });

  //controlOrbit-->
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  //controls.autoRotate = true;
  
  

   
  

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  // create a sphere

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
  //test
  //sphere.autoRotate = false;

  // create atmosphere

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

  const group = new THREE.Group();
  group.add(sphere);
  //scene.add(group);
  scene.add(sphere);

  camera.position.z = 15.6;
  
  
  
  const mouse = {
    x: undefined,
    y: undefined,
  };



  //animate function
  const animate  = () =>  {
    
    requestAnimationFrame(animate);
    

    sphere.rotateY (0.0002 * Math.PI);
    renderer.render( scene, camera );
    //requestAnimationFrame(animate);
    
    //  gsap.to(group.rotation, {
    //    x: -mouse.y * 0.5,
    //    y: mouse.x * 1.4,
    //    duration: 2,
    //  }); 

    
  };

  animate();

  // function to move the mouse

  // addEventListener("mousemove", () => {
  //   mouse.x = (event.clientX / innerWidth) * 2 - 1;
  //   mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  // });
};



// SateliteModel SpaceStation -->


const SateliteModel = () => {
  // camera function

  const canvasContainer = document.querySelector("#canvasContainerSatelite");
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
    canvas: document.querySelector("#canvasContainerSatelite"), //--> to improve the image
    alpha: true,
  });

  //OrbitControls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.autoRotate = true;
  orbitControls.autoRotateSpeed = -0.5;
  orbitControls.enableZoom = false;
  

  //Responsive Desing with Three Js

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //Responsive Desing with Three Js

  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio); //--> to improve the pixels to the image

  var loader = new GLTFLoader();
  //loader.setOption({ uv2: false });
  loader.load("/assets/img/SateliteFinal/scene.gltf", function (gltf) {
    const model = gltf.scene;

    scene.add(model);
      //model.position.x = -220;
     //model.position.y = 10;
    // model.position.z = 150;
  });

  // Phoenix Blue Astronaut
 
  //camera.position.z = ;
  camera.position.y = 1;
  camera.position.x = 3.5;

  

  // camera.position.x = 150;


  const mouse = {
    x: undefined,
    y: undefined,
  };

  //animate function
  const animate = () => {
    orbitControls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // Rotation
    // loader.rotation.y += 0.004;
    
  };

  // Light

  const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientalLight);

  const PointLight = new THREE.PointLight(0xfffffff, 1);
  PointLight.position.set(30, 50 ,50);  // (6, 7, 6)
  scene.add(PointLight);

  animate();

  // function to move the mouse

  // addEventListener("mousemove", () => {
  //   mouse.x = (event.clientX / innerWidth) * 2 - 1;
  //   mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  // });
  // scene.add(sphere);
};


//--> SateliteModel


const Models = () => {
  
  Earth();
  LegoAstronauts();
  SateliteModel();
   
};

Models();
