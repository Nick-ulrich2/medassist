import React from 'react';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import "./AuthPage.css";
import { Banniere, SimpleBanniere } from '../components/ui/Banniere'


const AuthPage = ({ children, admin = "" }) => {

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
      <div className='absolute h-[20vh] top-0 right-0 left-0 md:hidden' style={{background: "linear-gradient(to bottom,#93C5FD,white)"}}></div>
      <div className='absolute h-[20vh] bottom-0 right-0 left-0 md:hidden' style={{background: "linear-gradient(to top,#93C5FD,white)"}}></div>

      { /* Tablette et desktop */}
      <div className='hidden
        md:flex md:items-start md:text-blue-950 pt-7
      '>
        <SimpleBanniere />
      </div>

      <div className="flex items-start gap-4">
        <div className="hidden
          md:flex md:flex-col md:gap-6 md:w-2/5 text-blue-950 pt-5
        ">
          <div>
            <p className='text-4xl tracking-tight font-medium'>La santé</p>
            <p className='text-3xl font-light'>partout et pour tous</p>
          </div>
          <p className='w-75 text-[18px] font-normal'>
            Accédez à vos soins, vos dossiers médicaux, et à l'assistance médicale intelligente en toute sécurité.
          </p>
        </div>
        <div className='
          container
          mx-auto
          flex
          flex-col
          items-center
          z-10

          md:bg-white
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
            md:justify-around">
            
            {/** 
               * btn-ghost = transparence et discretion 
                */}
            
            <div>
              <button className=" flex text-lg btn btn-ghost">
                <ArrowLeftIcon className="h-5 w-5" />
                Retour
              </button>
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
                w-9/10
                grid 
                grid-cols-1 
                justify-items-center
                px-2 
                rounded-[20px]
                shadow-sm

                md:shadow-none
              '
          >
            {/*w-9/10 : Occupe 90% du conteneur afin que celui ci ne touche pas les bords dans certains cas */}
            <div className='w-full flex flex-col items-center px-2'>
              <Banniere />

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
      

  )
}

export default AuthPage;