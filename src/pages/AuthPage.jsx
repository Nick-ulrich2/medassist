import React from 'react';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const AuthPage = ({ children }) => {
  return (
    <div className='min-h-screen bg-center bg-no-repeat relative'
         style={{backgroundImage:"url('/public/logo123.png')"}}
    >
      <div className='absolute inset-0 bg-white/85 z-3'></div>
      <div className='
        container
        mx-auto
        flex
        flex-col
        items-center
        relative
        z-10
        '
      >
      {/*container est une classe utilitaire superbe pour le responsive que j'ai appris en regardant une video 
          je te laisse decouvrir . c'est ideal dans ce cas */}
        
            <div className="navbar flex justify-between md:justify-around">
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
              <button className="btn btn-square btn-ghost">
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
              shadow-md
            '
          >
            {/*w-9/10 : Occupe 90% du conteneur afin que celui ci ne touche pas les bords dans certains cas */}
            {children}
          </div>
      </div>
    </div>
    
  )
}

export default AuthPage;