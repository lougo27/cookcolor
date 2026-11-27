import '../style.css';
import * as THREE from "three";
import { gsap } from "gsap";

import { EspaceTravailRotation } from '../mouvementCam/espaceTravailRotation';
import { EspaceSecheRotation } from '../mouvementCam/espaceSecheRotation';

export class ButtonsManager {
    constructor(camera, assets) {
        console.log(assets)
        this.config = {
            right: { camera: { lookAtMesh: assets.tableDroite, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } } },
            left: { camera: { lookAtMesh: assets.tableGauche, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } } },
            center: { camera: { lookAtMesh: assets.toile, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } } }
        }
        this.currentState = "center"
        this.camera = camera;
        this.camera.previousLookAt = new THREE.Vector3(assets.toile.position.x, assets.toile.position.y, assets.toile.position.z);
        this.assets = assets

        this.initSelector();
        this.setRotationEspaceTravail();
        this.setRotationEspaceSeche();
        this.setRotationToile();

        this.directionalEspaceTravail.style.display = "flex";
        this.directionalEspaceSeche.style.display = "flex";

    }

    initSelector() {
        this.directionalButtonTravail = document.getElementById("directionalButtonTravail");
        this.directionalButtonSeche = document.getElementById("directionalButtonSeche");
        this.directionalButtonToile = document.getElementById("directionalButtonToile");

        this.directionalEspaceTravail = document.querySelector(".directionalEspaceTravail");
        this.directionalEspaceSeche = document.querySelector(".directionalEspaceSeche");
        this.directionalToile = document.querySelector(".directionalToile");
        this.circle = document.querySelector(".circle");
    }

    setRotation() {
        const initialRotation = new THREE.Vector3(this.camera.previousLookAt.x, this.camera.previousLookAt.y, this.camera.previousLookAt.z);
        const goalPosition = this.config[this.currentState].camera.lookAtMesh.position
        console.log(initialRotation, this.camera.rotation)

        // const rotateAngleY = 0.75
        // const newCamRotateAngleY = this.camera.rotation.y + rotateAngleY
        // const rotateAngleX = 0.1
        // const newCamRotateAngleX = this.camera.rotation.x + rotateAngleX
        // const rotateAngleZ = 0.1
        // const newCamRotateAngleZ = this.camera.rotation.z - rotateAngleZ
        gsap.to(initialRotation, {
            x: goalPosition.x,
            y: goalPosition.y,
            z: goalPosition.z,
            duration: 2,
            onUpdate: () => {
                this.camera.lookAt(initialRotation);
            },
            onComplete: () => {
                this.camera.previousLookAt = goalPosition
            }
        });
        // gsap.to(this.camera.position, {z: -2, x: -1, y: 2, duration: 2});
    }

    setRotationEspaceTravail() {
        this.EspaceTravailRotation = new EspaceTravailRotation(this.camera, this.assets.tableGauche);
        this.directionalButtonTravail.addEventListener("click", () => {
            // this.EspaceTravailRotation.setRotation()
            this.currentState = "right"
            this.setRotation();
            this.hideButtons()
            this.directionalToile.style.display = "flex";
        });
    }

    setRotationEspaceSeche() {
        // new EspaceSecheRotation(this.camera, this.assets.tableGauche);
        this.directionalButtonSeche.addEventListener("click", () => {
            this.currentState = "left"
            this.setRotation();
            this.hideButtons()
            this.directionalToile.style.display = "flex";
        });
    }

    setRotationToile() {
        // new EspaceSecheRotation(this.camera, this.assets.tableGauche);
        console.log("ici")
        this.directionalButtonToile.addEventListener("click", () => {
            console.log("click")

            this.currentState = "center"
            this.setRotation();
            this.hideButtons()
            this.directionalEspaceTravail.style.display = "flex";
            this.directionalEspaceSeche.style.display = "flex";
        });
    }

    hideButtons() {
        this.directionalEspaceTravail.style.display = "none";
        this.directionalEspaceSeche.style.display = "none";
        this.directionalToile.style.display = "none";
    }


    // setFlash() {
    //     gsap.to(this.circle.style, {opacity: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'power1.inOut'});
    // }

}