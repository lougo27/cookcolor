import './style.css';
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { ViewHelper } from 'three/addons/helpers/ViewHelper.js';
import { gsap } from "gsap";

import { Zoom } from './mouvementCam/zoom';

class Application {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
    );

    renderer = new THREE.WebGLRenderer ({
        antialias: true, // lisser les courbes
    });

    ambiantLight = new THREE.AmbientLight("#ffffff", 0.5)
    dirLight = new THREE.DirectionalLight(0xffffff, 1)
    sunLight = new THREE.DirectionalLight("#ffffff", 2);


    viewHelper = new ViewHelper( this.camera, this.renderer.domElement );
    //controls = new OrbitControls(this.camera, this.renderer.domElement);

    constructor(parameters) {
        // Scene
        this.scene.background = new THREE.Color("#efeadc");
        // Camera
        this.camera.position.set(-10, 3, -10);
        // this.camera.rotation.x = Math.PI;
        this.camera.lookAt(0,1.5,0);
        
        //Lights
        this.sunLight.position.set(3,5,2);
        this.sunLight.castShadow = true;
        this.dirLight.position.set(0,5,0);
        this.dirLight.target.position.set(1,0,2);
        this.dirLight.castShadow = true;

        this.scene.add(this.ambiantLight, this.sunLight, this.dirLight, this.dirLight.target)

        // Appel fonctions
        this.setup();
        this.helpers();

        // Appel class
        new Zoom(this.camera);

        // // Controls
        // this.controls.enablePan = false; // empèche que les gens partent dans le vide 
        // this.controls.cursorStyle ="grab";
        // this.controls.autoRotate = true;
        // this.controls.autoRotateSpeed = 3;
        // this.controls.enableDamping = true

        // Renderer
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);


        // loop
        this.renderer.setAnimationLoop((time) => {
        this.renderer.render(this.scene, this.camera);
        });

        // Resize
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });  
    }

    async setup() {
        const loader = new GLTFLoader();
        // const dracoLoader = new DRACOLoader();
        // this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
        // this.loader.setDRACOLoader( dracoLoader );
        const gltf = await loader.loadAsync('/glb_fichier/blenderProto.glb');
        const toileMesh = gltf.scene.children.find((mesh) => mesh.name === "toile");
        gsap.to(toileMesh.position, {x: 2, duration: 1, delay: 5})
        console.log(toileMesh)
        this.scene.add( gltf.scene );
    }

    helpers() {
        const gridHelper = new THREE.GridHelper(10, 20);
        const axesHelper = new THREE.AxesHelper(5)
        gridHelper.position.y = -0.5;
        this.scene.add(gridHelper,axesHelper);
    }

}

new Application()

