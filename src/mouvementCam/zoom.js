import '../style.css';
import * as THREE from "three";
import { gsap } from "gsap";


export class Zoom {
    
    constructor(camera) {
        this.camera = camera
        this.zoomButton = document.getElementById("zoomButton")

        this.setZoom();
    }


    setZoom() {
        gsap.to(this.camera.position, { z: -4, x: -4, duration: 2, delay: 1, ease: 'power3.inOut' });
    }
}