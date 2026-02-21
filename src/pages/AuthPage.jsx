import React from 'react';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const AuthPage = ({ children }) => {
  return (
    <div className='
      flex
      flex-col
      column
      px-3
      items-center 
      justify-center 
      '
    >
      <div className="navbar bg-base-100 shadow-sm flex justify-between md:justify-around">
      {/** 
         * btn-ghodt = transparence et discretion 
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
          w-full
          mx-10
          lg:w-225 
          flex 
          flex-col 
          items-center 
          px-1 
          py-4 
          bg-white 
          rounded-xl 
          shadow-sm
        '
      >
        {children}
      </div>
    </div>
  )
}

export default AuthPage;