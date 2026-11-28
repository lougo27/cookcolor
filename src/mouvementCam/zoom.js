import '../style.css';
import * as THREE from "three";
import { gsap } from "gsap";


export class Zoom {
    constructor(camera) {
        this.camera = camera
        this.zoomButton = document.getElementById("zoomButton")
        // this.zoomButton.addEventListener("click", () => {
        //     this.setZoom();
        // });
    }

    setZoom() {
        gsap.to(this.camera.position, { z: -3, x: -3, y: 2, duration: 2, delay: 0, ease: 'power3.inOut' });
        console.log("Après le zoom, la position de la caméra est :", this.camera.position);
    }

}