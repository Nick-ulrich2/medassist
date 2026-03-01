import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import "./AuthPage.css";
import { Banniere, SimpleBanniere } from '../components/ui/Banniere'


const AuthPage = ({ children, admin = "" }) => {

  let location = useLocation();

  // const [timelineColor, setTimelineColor] = useState("");
  const [timelineColor, setTimelineColor] = useState({
    color1: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
    colorSecrete: "",
    color6: "",
    color7: ""
  });

  // Gerons les changements de colorations des traits du timeline
  if (location.pathname == "/Page1" || location.pathname == "/Page2" || location.pathname == "/Page3" || location.pathname == "/Page4" || location.pathname == "/Page5" || location.pathname == "/PageSecrete" || location.pathname == "/Page6" || location.pathname == "/Page7") {
    // timelineColor.color1 = "bg-primary";
    // setTimelineColor(color1 = "bg-primary");
  }
  else if (location.pathname == "/Page2" || location.pathname == "/Page3" || location.pathname == "/Page4" || location.pathname == "/Page5" || location.pathname == "/PageSecrete" || location.pathname == "/Page6" || location.pathname == "/Page7") {
    // timelineColor.color2 = "bg-primary";
  }
  else if (location.pathname == "/Page3" || location.pathname == "/Page4" || location.pathname == "/Page5" || location.pathname == "/PageSecrete" || location.pathname == "/Page6" || location.pathname == "/Page7") {
    // timelineColor.color3 = "bg-primary";
  }
  else if (location.pathname == "/Page4" || location.pathname == "/Page5" || location.pathname == "/PageSecrete" || location.pathname == "/Page6" || location.pathname == "/Page7") {
    // timelineColor.color4 = "bg-primary";
  }
  else if (location.pathname == "/Page5" || location.pathname == "/PageSecrete" || location.pathname == "/Page6" || location.pathname == "/Page7") {
    // timelineColor.color5 = "bg-primary";
  }
  else if (location.pathname == "/PageSecrete" || location.pathname == "/Page6" || location.pathname == "/Page7") {
    // timelineColor.colorSecrete = "bg-primary";
  }
  else if (location.pathname == "/Page6" || location.pathname == "/Page7") {
    // timelineColor.color6 = "bg-primary";
  }
  else if (location.pathname == "/Page7") {
    // timelineColor.color7 = "bg-primary";
  }
  else { }

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
              <Link to="/Login" className=" flex text-lg btn btn-ghost">
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
                location.pathname != "/Login" &&
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
                      <hr className={timelineColor.color1} />
                    </li>
                    <li>
                      <hr className={timelineColor.color2} />
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
                      <hr className="bg-primary" />
                    </li>
                    <li>
                      <hr className="bg-primary" />
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
                      <hr />
                    </li>
                    <li>
                      <hr />
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
                      <hr />
                    </li>
                    <li>
                      <hr />
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