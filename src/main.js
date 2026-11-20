import './style.css';
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { Loader } from './introduction/loader';

class Application {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
    );

    renderer = new THREE.WebGLRenderer ({
        antialias: true, // lisser les courbes
    });


    constructor(parameters) {
        const loader = new Loader()
        this.scene.background = new THREE.Color(loader.colorBackground);

        new Loader()
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.renderer.setAnimationLoop((time) => {
            this.renderer.render(this.scene, this.camera);
        });

        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });   
    }
}

new Application()





