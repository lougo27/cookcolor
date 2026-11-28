import '../style.css';
import * as THREE from "three";
import { gsap } from "gsap";


export class ButtonsManager {
    constructor(camera, assets) {
        console.log(assets)
        this.config = {
            right: { camera: { lookAtMesh: assets.tableDroite, position: { x: -0.8, y: 2.5, z: -3 }, rotation: { x: 0, y: 0, z: 0 } } },
            left: { camera: { lookAtMesh: assets.tableGauche, position: { x: -3, y: 2.5, z: -0.8 }, rotation: { x: 0, y: 0, z: 0 } } },
            center: { camera: { lookAtMesh: assets.toile, position: { x: -3, y: 2, z: -3 }, rotation: { x: 0, y: 0, z: 0 } } },
            etagere: { camera: { lookAtMesh: assets.etagere, position: { x: -3, y: 2.5, z: -0.8 }, rotation: { x: 0, y: 0, z: 0 } } }
        }
        this.currentState = "center"
        this.camera = camera;
        this.camera.previousLookAt = new THREE.Vector3(assets.toile.position.x, assets.toile.position.y, assets.toile.position.z);
        this.camera.previousPosition = new THREE.Vector3(this.config.center.camera.position.x, this.config.center.camera.position.y, this.config.center.camera.position.z);
        this.assets = assets

        this.initSelector();
        this.setRotationEspaceTravail();
        this.setRotationEspaceSeche();
        this.setRotationToile();
        this.setRotationEtagere();

        this.directionalEspaceTravail.style.display = "flex";
        this.directionalEspaceSeche.style.display = "flex";

    }

    initSelector() {
        this.directionalButtonTravail = document.getElementById("directionalButtonTravail");
        this.directionalButtonSeche = document.getElementById("directionalButtonSeche");
        this.directionalButtonToile = document.getElementById("directionalButtonToile");
        this.etagereButton = document.getElementById("etagereButton");

        this.directionalEspaceTravail = document.querySelector(".directionalEspaceTravail");
        this.directionalEspaceSeche = document.querySelector(".directionalEspaceSeche");
        this.directionalToile = document.querySelector(".directionalToile");
        this.circle = document.querySelector(".circle");
    }

    setRotation() {
        const initialRotation = new THREE.Vector3(this.camera.previousLookAt.x, this.camera.previousLookAt.y, this.camera.previousLookAt.z);
        const goalPositionRotation = this.config[this.currentState].camera.lookAtMesh.position
        console.log(initialRotation, this.camera.rotation)

        gsap.to(initialRotation, {
            x: goalPositionRotation.x,
            y: goalPositionRotation.y,
            z: goalPositionRotation.z,
            duration: 2,
            onUpdate: () => {
                this.camera.lookAt(initialRotation);
            },
            onComplete: () => {
                this.camera.previousLookAt = goalPositionRotation
            }
        });
    }

    setPosition() {
        const initialPosition = new THREE.Vector3(this.camera.previousPosition.x, this.camera.previousPosition.y, this.camera.previousPosition.z);
        const goalPosition = new THREE.Vector3(this.config[this.currentState].camera.position.x, this.config[this.currentState].camera.position.y, this.config[this.currentState].camera.position.z);

        gsap.to(initialPosition, {
            x: goalPosition.x,
            y: goalPosition.y,
            z: goalPosition.z,
            duration: 2,
            onUpdate: () => {
                this.camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
            },
            onComplete: () => {
                this.camera.previousPosition = goalPosition
            }
        });
    }

    setRotationEspaceTravail() {
        // this.EspaceTravailRotation = new EspaceTravailRotation(this.camera, this.assets.tableGauche);
        this.directionalButtonTravail.addEventListener("click", () => {
            // this.EspaceTravailRotation.setRotation()
            this.currentState = "right"
            // gsap.to(this.camera.position, {z: -3, x: -0.8, y: 2.5, duration: 2});
            this.setPosition();
            this.setRotation();
            this.hideButtons();
            this.directionalToile.style.display = "flex";
            this.directionalToile.classList.remove("right");
            this.directionalToile.classList.add("left");
            this.etagereButton.style.display = "flex";
        });
    }

    setRotationEspaceSeche() {
        // new EspaceSecheRotation(this.camera, this.assets.tableGauche);
        this.directionalButtonSeche.addEventListener("click", () => {
            this.currentState = "left"
            // gsap.to(this.camera.position, {z: -0.8, x: -3, y: 2.5, duration: 2});
            this.setPosition();
            this.setRotation();
            this.hideButtons()
            this.directionalToile.style.display = "flex";
            this.directionalToile.classList.remove("left");
            this.directionalToile.classList.add("right");
        
        });
    }

    setRotationToile() {
        // new EspaceSecheRotation(this.camera, this.assets.tableGauche);
        console.log("ici")
        this.directionalButtonToile.addEventListener("click", () => {
            console.log("click")

            this.currentState = "center"
            // gsap.to(this.camera.position, {z: -3, x: -3, y: 2, duration: 2});
            this.setPosition();
            this.setRotation();
            this.hideButtons();
            this.directionalEspaceTravail.style.display = "flex";
            this.directionalEspaceSeche.style.display = "flex";
        });
    }

    setRotationEtagere() {
        this.etagereButton.addEventListener("click", () => {
            this.currentState = "etagere"
            console.log("click etagere")
            // this.setPosition();
            this.setRotation();
            this.hideButtons();
            this.directionalToile.style.display = "flex";
        });
    }

    hideButtons() {
        this.directionalEspaceTravail.style.display = "none";
        this.directionalEspaceSeche.style.display = "none";
        this.directionalToile.style.display = "none";
        this.etagereButton.style.display = "none";
    }


    // setFlash() {
    //     gsap.to(this.circle.style, {opacity: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'power1.inOut'});
    // }

}