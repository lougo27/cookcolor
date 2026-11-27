import '../style.css';
import * as THREE from "three";
import { gsap } from "gsap";

import { Zoom } from '../mouvementCam/zoom';
import { ButtonsManager } from '../action/ButtonsManager.js';

export class Step1 {
    constructor(camera, assets) {
        this.step1 = document.getElementById("step1Button")
        this.zoom = new Zoom(camera);
        this.assets = assets
        
        this.step1.addEventListener("click", () => {
            this.zoom.setZoom();
            setTimeout(() => {
                console.log(this.assets)
                new ButtonsManager(camera, this.assets);
            }, 2000);
        });
    }
}