23 / 02 / 26 (Nick)

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


{Il manque aussi a ajouter les textes complementaires partout }