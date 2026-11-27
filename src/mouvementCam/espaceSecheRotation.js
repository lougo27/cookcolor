import '../style.css';
import * as THREE from "three";
import { gsap } from "gsap";

export class EspaceSecheRotation {
    constructor(camera, gltf) {
        this.camera = camera;
        this.gltf = gltf;
        this.setRotation();
    }

    setRotation() {
        console.log(this.gltf)
        // const rotateAngleY = 0.75
        // const newCamRotateAngleY = this.camera.rotation.y - rotateAngleY
        // const rotateAngleX = 0.
        // const newCamRotateAngleX = this.camera.rotation.x - rotateAngleX
        // const rotateAngleZ = 0.1
        // const newCamRotateAngleZ = this.camera.rotation.z - rotateAngleZ
        // gsap.to(this.camera.rotation, {y: newCamRotateAngleY , duration: 2});
        // gsap.to(this.camera.position, {z: -0.6, x: -3, y: 1.5, duration: 2});
        this.tableGauche = gltf.scene.children.find((mesh) => mesh.name === "table_gauche");
        this.camera.lookAt(this.tableGauche);
    }
}