// Ce code est le chef d'orchestre de l'application. Il importe les module nécéssaire pour créer la scène 3D.

// Importation de la bibliothèque three js et de la feuille de style CSS pour l'application.
import './style.css';
import * as THREE from "three";
// Importation des différents modules de l'application pour gérer la caméra, la lumière et le chargement des modèles 3D.
import { Loader } from './introduction/menu-gltf-loader.js';
import { Light } from './introduction/menu-light.js';
import { Camera } from './introduction/menu-camera.js';

import { DebugPanel } from './introduction/menu-debug.js';

// Définition de la classe Application qui gère l'ensemble de l'application 3D.
class Application {
// Création d'une scène 3D pour contenir tous les objets, lumières et caméras.
    scene = new THREE.Scene();
// dessine la scène 3D dans un canvas HTML en utilisant WebGLRenderer de Three.js.
    renderer = new THREE.WebGLRenderer ({
        antialias: true, // lisser les courbes
    });

// Constructeur de la classe Application qui initialise la scène, la caméra, la lumière et le rendu.
    constructor(parameters) {
        const loader = new Loader(this.scene); // Création d'une instance de Loader pour charger le modèle 3D et l'ajouter à la scène plus tard
        this.debugPanel = new DebugPanel();
        new Light(this.scene, this.debugPanel); // Création d'une instance de Light pour ajouter l'éclairage à la scène.

        // Configuration du rendu de la scène 3D avec le renderer de Three.js. La limitte est a 2 pour éviter de surcharger le GPU avec des résolutions trop élevées sur les écrans haute densité.
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
        // Définition de la taille du rendu en fonction de la taille de la fenêtre du navigateur.
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // Ajout du canvas HTML généré par le renderer à la page web pour afficher la scène 3D.
        document.body.appendChild(this.renderer.domElement);

        //Création de l'instance de la classe Camera pour gérer la vue de la scène 3D. Le renderer doit exister avant car la caméra a besoin d'un élément DOM pour attacher les contrôles d'orbite.
        
        this.camera = new Camera(this.renderer, this.debugPanel);


        // Configuration de la boucle d'animation pour rendre la scène 3D à chaque frame.
        this.renderer.setAnimationLoop((time) => {
            this.renderer.render(this.scene, this.camera.camera); // Rendu de la scène 3D en utilisant la caméra configurée dans le module Camera.
            // this.camera.camera c'est la caméra de la classe Camera, on ne peut pas faire this.camera car c'est un objet de la classe Camera et non une caméra Three.js.
        });

        // Gestion de la redimension de la fenêtre du navigateur pour ajuster le rendu de la scène 3D. Resize est un événement qui se déclenche lorsque la taille de la fenêtre change. On met à jour la taille du rendu pour qu'il corresponde à la nouvelle taille de la fenêtre.
        window.addEventListener("resize", () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight); // Mise à jour de la taille du rendu lorsque la fenêtre est redimensionnée.
        });
    }
}
// Création d'une instance de la classe Application pour démarrer l'application 3D.
new Application()
