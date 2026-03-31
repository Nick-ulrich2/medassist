 02 / 26 (Nick)

- Modification du logo en sans serif, augmenter le weight et diminue son opacite
- Creation d'un fichier AuthPage.css pour conditionnement d'affichage de background
- Application de "back" a la div principale
- Modification de la taille du lien creer un compte de 14px a text-sm
- Deplacement de la div wrapper et de la banniere dans le AuthPage pour generaliser la chose

- Structuration presque complète du parcours d’inscription multi-étapes (Page1 → Page6)
- Mise en place d’un layout commun AuthPage pour uniformiser toutes les pages d’authentification (j'ai vu une amelioration a faire de nouveau)
- Centralisation de l’icône administrateur (ShieldCheckIcon) dans le layout AuthPage
- Création d’un système de sélection par cartes via le composant RegisterButton
- Implémentation de la sélection du profil utilisateur (Patient, Praticien, Entreprise, Structure hospitalière, Pharmacie, Laboratoire)
- Implémentation de la sélection de civilité (Homme, Femme, Autre)
- Mise en place des formulaires progressifs :
  • Nom et prénom + email  
  • Date et localisation  
  • Contact et mot de passe  
  • Vérification par code  

- Gestion des champs contrôlés React avec useState sur toutes les pages
- Uniformisation du style des formulaires avec Tailwind (largeur, centrage, responsive)
- Harmonisation des titres de sections (typographie, couleur, hiérarchie visuelle)
- Factorisation de la logique de soumission via handleSubmit sur chaque étape
- Préparation de l’intégration future d’API pour pays / ville / quartier
- Création d’un système de background responsive via AuthPage.css
- Mise en place d’un background desktop + alternative mobile (<768px)
- Application de la classe back sur le conteneur principal AuthPage


{
    Il manque aussi a ajouter les textes complementaires partout

    Il faut aussi ajouter une icone pour le changement de langues  
}

01 / 03 / 2026 (Nick)
- j'ai enleve la police inter car elle est a serif automatiquement
- Les liens vers les differentes pages fonctionnent
- Realisation d'une timeline en cours

01 / 03/ 2026 (T F A)
- Ajustement de la taille des RegisterButton de maniere responsive
- Ajout de la transparence sur le fond blanc de la AuthPage (bg-white/75)

18 / 03 / 2026 (Nick)

- Prototype de navbar fait, il ne manque plus qu'a faire la logique 
- Creation du Dropdown.jsx
- logo.jsx

21 / 03 / 2026 (T.F.A)
- Modification au niveau de Button.jsx afin de les rendre plus gonfle
- Modification des Input pour rendre le focus plus propre.
- Ajout du lien au niveau du bouton "se connecter" de la page d'accueil pre-connexion

23 / 03 / 26 (Nick)
- Animations navbar ok
- Navbar mobile okay
- Besoin d'une verification complete et d'une annotation de tous les manquants de celle ci en vu d'une amelioration ou d'un ajout apres remarque 
- Passage a Hero.jsx

( T. F . A)
- Ajout de plusieurs phrases au niveau de la AuthPage.jsx avec le rendu ecrire et suppression rapide avec delai de 3 secondes 
- BUG : Le Dropdown s'affiche sur les autres elements de la navBar 
- Au niveau du hero, Je prefere une animation de fondu au lieu du defilement . 

24 / 03 / 2026 (Nick)
- Mise en place d'un carousel manuel sur hero.jsx
- prochaine etape : correction du bug de la partie mobile de la navbar

(T. F. A)
- Correction des fautes d'ortographe sur l'etendu de l'application jusqu'a present sauf dans modifications.md (Ici, on s'en fou des fautes d'orthographe)
- Modifications pour l'inscription en generale (pas encore)
- Modification de "praticien" par "professionnel de sante" c'est plus clair je trouve pour les plus idiots. (fait)
- Nouvelles images pour le hero (pas encore )
- Informations du dropdown modifie (Fait)
- Ajout de la logique au niveau de l'oeil de "InputPassword"
- Modification au niveau de la navBar au lieu de max-md j'ai mis max-lg pour que ca soit plus lisible 

28 / 03 / 2026 (NIck)
- Tous les bugs de la navbar ont ete geres, augmentation legere du niveau de scalabilite
- Creation d'un composant PlusIcon dans Banniere.jsx
- Creation de baseBtn contenant les attributs tailwind qui sont identiques sur chaque composant bouton
- Creation d'un InputWrapper dans Input.jsx
- Je vais continuer a partir de Login.jsx

31/03/2026 (T. F. A)
- Proposition d'un nouvel Hero dasn le dossier Hero1.jsx(Je le trouve meilleur pas a cause de son design qui est d'ailleurs plus beau je trouve, mais a sa meilleure adaptabilite en version mobile )