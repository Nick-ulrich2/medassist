import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import "./AuthPage.css";
import { Banniere, SimpleBanniere } from '../components/ui/Banniere'

// Cette fonction provoque plusieurs re-renders
export function TypewriterLoop() {
  const textes = [
    "Accédez à vos soins, vos dossiers médicaux, et à l'assistance médicale intelligente en toute sécurité.",
    "Consultez vos informations de santé, suivez vos soins et bénéficiez d’une assistance IA fiable et sécurisée.",
    "Vos dossiers médicaux, vos parcours de soins et une aide intelligente réunis dans une plateforme sécurisée.",
    "Gérez votre santé en toute confiance grâce à un accès sécurisé à vos soins et à une assistance médicale boostée à l’IA.",
    "Retrouvez vos dossiers, vos consultations et des recommandations intelligentes dans un espace médical protégé.",
    "Une plateforme sécurisée pour accéder à vos soins, centraliser vos données médicales et profiter d’une IA au service de votre santé.",
    "Simplifiez votre parcours médical avec un accès sûr à vos dossiers et à une assistance intelligente disponible à tout moment.",
    "Vos soins, vos données médicales et votre assistance IA, réunis dans un environnement sécurisé et intuitif.",
    "Profitez d’un accès sécurisé à vos dossiers médicaux et à une assistance médicale intelligente pensée pour vous accompagner.",
    "Une expérience de santé plus simple, plus sûre et plus intelligente, avec vos soins et vos données au même endroit."
  ];
  const [indexTexte, setIndexTexte] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const i = useRef(0); // Stocke une valeur qui ne provoque pas de re-render

  useEffect(() => {
    const current = textes[indexTexte]; // Texte actuel
    let speed = isDeleting ? 10 : 50; // Vitesse d'animation (suppression rapide)

    const timeout = setTimeout(() => {
      // setText((prev) =>
      //   isDeleting
      //     ? current.substring(0, prev.length - 1)
      //     : current.substring(0, prev.length + 1)
      // );

      setText(current.substring(0, i.current)); // Affiche le texte
      // i.current est la position actuelle dans le texte
      i.current = isDeleting ? i.current - 1 : i.current + 1; // mise a jour du curseur

      //   if (!isDeleting && text === current) {
      //     setTimeout(() => setIsDeleting(true), 3000);
      //   } else if (isDeleting && text === "") {
      //     setIsDeleting(false);
      //     setIndexTexte((prev) => (prev + 1) % textes.length);
      //   }
      // }, speed);
      if (!isDeleting && i.current > current.length) {
        setTimeout(() => setIsDeleting(true), 3000);
      }
      else if (isDeleting && i.current < 0) {
        setIsDeleting(false);
        setIndexTexte((prev) => (prev + 1) % textes.length);
        i.current = 0;
      }
    }, speed);


    return () => clearTimeout(timeout);
  }, [text, isDeleting, indexTexte, textes]);

  return (
    <p className="w-75 text-xl font-normal lg:text-2xl">
      {text}
    </p>
  );
}

const AuthPage = ({ children, admin = "" }) => {

  let location = useLocation();

  // Je n'ai pas encore trouve un moyen optimal de gerer ceci, utilisons d'abord cette methode
  const timelinePages = [
    "/Page1",
    "/Page2",
    "/Page3",
    "/Page4",
    "/Page5",
    "/PageSecrete",
    "/Page6",
    "/Page7"
  ];

  const activeIndex = timelinePages.indexOf(location.pathname);

  const colors = timelinePages.map((_, index) => index <= activeIndex ? "bg-primary" : "");

  return (
    <div className='
        w-full
        min-h-screen 
        bg-center 
        bg-no-repeat 
        relative 
        back
        md:px-4
        lg:px-18
        xl:px-24
      '
    >

      {/* Portion du code qui gere la transparence du background et le degrade de bleu au dessus et en dessous de la page */}
      <div className='absolute inset-0 bg-white/80 md:bg-transparent'></div>
      <div className='absolute h-[20vh] top-0 right-0 left-0 md:hidden' style={{ background: "linear-gradient(to bottom,#93C5FD,white)" }}></div>
      <div className='absolute h-[20vh] bottom-0 right-0 left-0 md:hidden' style={{ background: "linear-gradient(to top,#93C5FD,white)" }}></div>

      { /* Tablette et desktop */}
      <div className='hidden
          md:flex 
          md:items-start 
          md:text-blue-950 
          pt-7
        '
      >
        <SimpleBanniere />
      </div>

      <div className="flex items-start gap-4">
        <div className="hidden
            md:flex 
            md:flex-col 
            md:gap-6 
            md:w-2/5 
            text-blue-950 
            md:pt-5
          "
        >
          <div>
            <p className='text-4xl tracking-tight font-medium'>La santé</p>
            <p className='text-3xl font-light'>partout et pour tous</p>
          </div>
          {<TypewriterLoop />}
        </div>
        <div className='
          container
          mx-auto
          flex
          flex-col
          items-center
          z-10

          md:bg-white/75
          md:rounded-2xl
          md:shadow-2xl
          xl:w-3/5
          '
        >
          {/*container est une classe utilitaire superbe pour le responsive que j'ai appris en regardant une video 
            je te laisse decouvrir . c'est ideal dans ce cas */}

          <div className="
              navbar 
              flex 
              justify-between
            "
          >

            {/** 
               * btn-ghost = transparence et discretion 
                */}

            <div>
              <Link to="/" className=" flex text-lg btn btn-ghost">
                <ArrowLeftIcon className="h-5 w-5" />
                Retour
              </Link>
            </div>

            <div>
              <button className="btn btn-square btn-ghost" title="Creer un compte admin">
                {admin}
              </button>
              <button className="btn btn-square btn-ghost" title="Besoin d'aide?">
                <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>

          <div className='
              w-[90%]
              grid 
              grid-cols-1 
              justify-items-center
              md:shadow-none
            '
          >
            {/*w-9/10 : Occupe 90% du conteneur afin que celui ci ne touche pas les bords dans certains cas */}
            <div className='w-full flex flex-col items-center pb-5'>
              <Banniere />
              {
                location.pathname != "/login" &&
                <span>Gestion du timeline</span>
              }

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default AuthPage;