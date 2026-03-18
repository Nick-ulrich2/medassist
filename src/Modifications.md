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

- Prototype de navbar fait, il ne manque plus qu'a ajouter les elements de la navbar et a faire la logique 













                <div>
                  <ul className="timeline">
                    <li>
                      <div className="timeline-start timeline-box">S'inscrire</div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="text-primary w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr className={color1} />
                    </li>
                    <li>
                      <hr className={color1} />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="text-primary h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box">iMac</div>
                      <hr className={color1} />
                    </li>
                    <li>
                      <hr className={color1} />
                      <div className="timeline-start timeline-box">iPod</div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="text-primary h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <hr className={color1} />
                    </li>
                    <li>
                      <hr className={color1} />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box">iPhone</div>
                      <hr className={color1} />
                    </li>
                    <li>
                      <hr className={color1} />
                      <div className="timeline-start timeline-box">Apple Watch</div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
