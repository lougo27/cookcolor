// Ceci est un module Javascript qui définit une caméra pour une scène 3D en utilisant la bibliothèque Three.js. 
// Il importe les classes nécessaires de Three.js et configure une caméra perspective avec des contrôles d'orbite pour permettre à 
// l'utilisateur de manipuler la vue de la scène. La classe Camera est exportée pour être utilisée dans d'autres modules.


// Importation des orbit controls de Three.js pour permettre la manipulation de la caméra dans la scène 3D.
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Exportation de la classe Caméra pour être utilisée dans d'autre Module.
// La classe Caméra est responsable de la création et de la configuration d'une caméra perspective pour une scène 3D.
// Pour fonctionner elle prends en paramètre un objet contenant un élément DOM sur lequel les contrôles d'orbite seront attachés.
export class Camera {
    constructor(parameters) {

        this.camera = new THREE.PerspectiveCamera( 
            45, // Champ de vision en degrés
            window.innerWidth / window.innerHeight, // Ratio d'aspect basé sur la taille de la fenêtre
            0.1, // Plan de coupe proche
            1000 // Plan de coupe lointain
        );
        this.camera.position.set(0, 0, 5); // Position initiale de la caméra dans l'espace 3D
        // Création des contrôles d'orbite pour permettre à l'utilisateur de manipuler la caméra avec la souris.
        this.controls = new OrbitControls(this.camera, parameters.domElement); 
        // Configuration des contrôles d'orbite pour permettre un mouvement fluide et limité de la caméra.
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight; 
            this.camera.updateProjectionMatrix(); // Mise à jour de la matrice de projection de la caméra lorsque la taille de la fenêtre change
        });
    }
}