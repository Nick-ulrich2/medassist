import { useState, useEffect } from "react";
import { SimpleButton } from "../../ui/Button";

const Hero1 = () => {
    return (
        <div className="relative w-full min-h-[80vh] bg-slate-100">
            <div className="absolute inset-0 bg-blue-100 [clip-path:polygon(0_0,100%_0,100%_20%,20%_100%,0_100%)]"></div>
            <div className="
                relative w-9/10 mx-auto h-[80vh] grid grid-cols-2 z-10 pt-30
                max-lg:grid-cols-1
            ">
                <div className="
                    flex flex-col justify-start items-start gap-10 h-full p-4
                    max-lg:items-center
                ">
                    <div className="flex px-7 py-4 bg-blue-700 text-white font-medium rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">
                        <p>Plateforme de santé intelligente</p>
                    </div>
                    <h1 className="text-4xl font-bold text-blue-950 *:max-md:text-2xl">{"Bienvenue dans l'ère de la médecine augmentée".toUpperCase()} </h1>
                    <p className="font-normal text-xl max-md:text-[18px]">
                        <span className="text-2xl text-blue-800 font-black max-md:text-xl">MedAssist+</span> est une plateforme révolutionnaire offrant une solution hybride unique, 
                        alliant intelligence artificielle de pointe et services de santé de proximité. 
                    </p>
                    <p className="font-normal text-xl max-md:text-[18px]">
                        Découvrez des services rapides, fiables et accessibles : 
                        <span className="font-semibold text-blue-950"> téléconsultation, soins à domicile, suivi médical, assistance IA et plus encore.</span><br/><br/>
                        <span className="font-bold text-blue-950">"La santé dont vous avez besoin, au moment où vous en avez besoin"</span>
                    </p>
                    <SimpleButton buttonText="Découvrir nos services" />
                </div>
                <div >
                    <img src="hero5.png" alt="IA et medecine" className="h-full object-cover object-right rounded-xl" />
                </div>
                
            </div>
        </div>
    )
}

export default Hero1