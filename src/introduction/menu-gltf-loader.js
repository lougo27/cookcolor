// Ceci est un module Javascript qui définit un chargeur GLTF pour une scène 3D en utilisant la bibliothèque Three.js.
// Il importe la classe GLTFLoader de Three.js et configure un chargeur pour charger un fichier GLB spécifique. 
// La classe Loader est exportée pour être utilisée dans d'autres modules.

// Importation de la classe GLTFLoader de Three.js pour permettre le chargement de modèles 3D au format GLTF/GLB.
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Exportation de la classe Loader pour être utilisée dans d'autre Module.
// NB : Le modèle n'est pas tout de suite disponible car le chargement prend du temps.
export class Loader {
    constructor(parameters) { // Prend en paramètre la scène de l'application envoyée par main.js
        this.loader = new GLTFLoader(); // Création d'une instance de GLTFLoader pour charger des modèles 3D au format GLTF/GLB.
        this.loader.load('glb_fichier/blender-S-proto.glb', (gltf) => { 
            this.gltf = gltf; // Stockage du modèle chargé dans la propriété gltf de l'instance de Loader.
            parameters.add(this.gltf.scene); 
            // Ajout du modèle chargé à la scène en utilisant la méthode add fournie dans les paramètres.
        });
    }
}