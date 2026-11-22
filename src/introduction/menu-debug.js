// Ceci est un module débug pour l'application 3D, il permet de créer un panneau de contrôle pour ajuster les paramètres de la lumière et de la caméra en temps réel. Il utilise la bibliothèque lil-gui pour créer une interface utilisateur simple et intuitive. Le module est conçu pour être utilisé uniquement à des fins de débogage et d'expérimentation, et ne doit pas être inclus dans la version finale de l'application.

// Importation de la bibliothèque lil-gui pour créer une interface utilisateur graphique.
import GUI from 'lil-gui';


export class DebugPanel {
    constructor() {
        this.gui = new GUI(); // Création d'une instance de GUI pour créer le panneau de contrôle.

        // Création d'un dossier pour les paramètres de la lumière.
        this.lightFolder = this.gui.addFolder('Light');

        // Création d'un dossier pour les paramètres de la caméra.
        this.cameraFolder = this.gui.addFolder('Camera');
    }
}
