import { useState, useEffect } from "react";

const Hero1 = () => {
    return (
        <div className="relative w-full min-h-[80vh] bg-slate-100">
            <div className="absolute inset-0 bg-blue-100 [clip-path:polygon(0_0,100%_0,100%_20%,20%_100%,0_100%)]"></div>
            <div className="relative container mx-auto h-[80vh] grid grid-cols-2 z-10 pt-30">
                <div className="flex flex-col justify-start items-center gap-5 h-full">
                    <div className="flex p-4 bg-slate-300 rounded-full">
                        <p>Plateforme de santé intelligente</p>
                    </div>
                    <h1>Bienveue dans l'ère de la medecine augmentée </h1>
                    <p>
                        <span>MedAsist +</span> est une plateforme révolutionnaire offrant une solution hybride unique, 
                        alliant intelligence artificielle de pointe et services de santé de proximité. 
                    </p>
                    <button>Découvrir nos services</button>
                </div>
                <div >
                    <img src="hero5.png" alt="IA et medecine" className="h-full object-cover object-center rounded-xl" />
                </div>
                
            </div>
        </div>
    )
}

export default Hero1