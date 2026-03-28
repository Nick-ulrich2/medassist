import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import "./AuthPage.css";
import { Banniere, SimpleBanniere } from '../components/ui/Banniere'


const AuthPage = ({ children, admin = "" }) => {

  let location = useLocation();

  // Je n'ai pas encore trouve un moyen optimal de gerer ceci, utilisons d'abord cette methode
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [colorSecrete, setColorSecrete] = useState("");
  const [color6, setColor6] = useState("");
  const [color7, setColor7] = useState("");

  // Gestion de l'affichage du timeline
  


  useEffect(() => {
    // Gerons les changements de colorations des traits du timeline
    if (
      location.pathname == "/Page1" ||
      location.pathname == "/Page2" ||
      location.pathname == "/Page3" ||
      location.pathname == "/Page4" ||
      location.pathname == "/Page5" ||
      location.pathname == "/PageSecrete" ||
      location.pathname == "/Page6" ||
      location.pathname == "/Page7"
    ) {
      setColor1("bg-primary");
    }
    else if (
      location.pathname == "/Page2" || 
      location.pathname == "/Page3" || 
      location.pathname == "/Page4" || 
      location.pathname == "/Page5" || 
      location.pathname == "/PageSecrete" || 
      location.pathname == "/Page6" || 
      location.pathname == "/Page7"
    ) {
      setColor2("bg-primary");
    }
    else if (
      location.pathname == "/Page3" || 
      location.pathname == "/Page4" || 
      location.pathname == "/Page5" || 
      location.pathname == "/PageSecrete" || 
      location.pathname == "/Page6" || 
      location.pathname == "/Page7"
    ) {
      setColor3("bg-primary");
    }
    else if (
      location.pathname == "/Page4" || 
      location.pathname == "/Page5" || 
      location.pathname == "/PageSecrete" || 
      location.pathname == "/Page6" || 
      location.pathname == "/Page7"
    ) {
      setColor4("bg-primary");
    }
    else if (
      location.pathname == "/Page5" || 
      location.pathname == "/PageSecrete" || 
      location.pathname == "/Page6" || 
      location.pathname == "/Page7"
    ) {
      setColor5("bg-primary");
    }
    else if (
      location.pathname == "/PageSecrete" || 
      location.pathname == "/Page6" || 
      location.pathname == "/Page7"
    ) {
      setColorSecrete("bg-primary");
    }
    else if (
      location.pathname == "/Page6" || 
      location.pathname == "/Page7"
    ) {
      setColor6("bg-primary");
    }
    else if (
      location.pathname == "/Page7"
    ) {
      setColor7("bg-primary");
    }
    else { }
  }, [location.pathname])

function TypewriterLoop() {
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

  useEffect(() => {
    const current = textes[indexTexte];
    let speed = isDeleting ? 10 : 50;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndexTexte((prev) => (prev + 1) % textes.length);
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
          {TypewriterLoop()}
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