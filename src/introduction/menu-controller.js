/*  Ceci est le contrôleur pour le menu d'introduction
il sert à gérer les interactions avec le menu d'introduction */

// Exportation de la classe MenuController pour être utilisée dans d'autres modules.
export class MenuController{

    // Le constructeur de la classe MenuController
    // IL sélectionne les éléments du DOM nécessaires pour le menu d'introduction et ajoute des écouteurs d'événements pour gérer l'ouverture et la fermeture du menu.
    constructor(){
        //Attention querySelector ne prend que le premier élément correspondant au sélecteur CSS. Si vous avez plusieurs éléments avec la même classe, il ne sélectionnera que le premier.
        this.menuButton = document.querySelector('.menuPlayContainer__buttonPlay__P');
        this.menu = document.querySelector('.modalIntro__P');
        this.closeButton = document.querySelector('.modalIntro__contain__item__P');

        // Ajout d'un écouteur d'évenement sur le bouton pour ouvrir le classeur a dessin (menu d'introduction)
        this.menuButton.addEventListener('click', () => {
            this.menu.style.display = 'flex';
            this.menuButton.style.display = 'none';
        });

        // Ajout d'un écouteur d'évenement sur le bouton pour fermer le classeur a dessin (menu d'introduction)
        this.closeButton.addEventListener('click', () => {
            this.menu.style.display = 'none';
        });
    }

}