import '../style.css';
import * as THREE from "three";
import { gsap } from "gsap";
import { GUI } from 'lil-gui';

export class EspaceTravailRotation {
    constructor(camera) {
        this.camera = camera;
        // this.gui = new GUI();
        // this.gui.close();
        // const settings = {
        //     cameraX: -10,
        //     cameraY: 3,
        //     cameraZ: -10,
        //     rotationY: 0.25,
        //     rotationX: 0,
        //     rotationZ: 0

        // };
        
        // this.gui.add(settings, 'cameraX', -10, 10).onChange((value) => {
        //     this.camera.position.x = value;
        // });
        // this.gui.add(settings, 'cameraY', -10, 10).onChange((value) => {
        //     this.camera.position.y = value;
        // });
        // this.gui.add(settings, 'cameraZ', -10, 10).onChange((value) => {
        //     this.camera.position.z = value;
        // });
        // this.gui.add(settings, 'rotationY', -10, 10).onChange((value) => {
        //     this.camera.rotation.y = value;
        // });

        // this.gui.add(settings, 'rotationX', -10, 10).onChange((value) => {
        //     this.camera.rotation.x = value;
        // });
        // this.gui.add(settings, 'rotationZ', -10, 10).onChange((value) => {
        //     this.camera.rotation.z = value;
        // });




    }

    setRotation() {
        
        
    }
}