// Ceci est un module JavaScript qui définit une classe Light pour gérer l'éclairage dans une scène 3D utilisant Three.js.
// Il importe la bibliothèque Three.js et configure une lumière ambiante et une lumière directionnelle (soleil) avec des ombres.
import * as THREE from "three";
// Exportation de la classe Light pour être utilisée dans d'autres modules.
export class Light {
    constructor(parameters) {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Sert à éclairer uniformément la scène sans direction spécifique, prend en paramètre la couleur et l'intensité de la lumière.
        this.sunLight = new THREE.DirectionalLight(0xffffff, 2); // Sert à simuler la lumière du soleil, prend en paramètre la couleur et l'intensité de la lumière.
        this.sunLight.position.set(10, 10, 10); // Position de la lumière du soleil dans l'espace 3D.
        this.sunLight.castShadow = true; // Active le rendu des ombres portées par la lumière du soleil. cela ne suffit pas pour que les ombres soient visibles, il faut aussi activer le rendu des ombres sur les objets de la scène.
        this.sunLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 1); // Crée un helper pour visualiser la direction de la lumière du soleil.
        parameters.add(this.sunLightHelper, this.sunLight, this.ambientLight); // Ajoute la lumière ambiante, la lumière directionnelle et le helper à la scène en utilisant la méthode add fournie dans les paramètres.
    }
}