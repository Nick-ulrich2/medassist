import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {

    // Au niveau des id, tu devras mettre le nom de chaque slide
    const carouselItems = [
        {
            id: "slide1",
            src: "hero4.png",
            prev: "#slide4",
            next: "#slide2",
            color: '',
            text: `est une plateforme révolutionnaire 
                    qui propose une solution hybride unique, 
                    combinant l’intelligence artificielle de pointe 
                    et des services de santé de proximité.`,
        },
        {
            id: "slide2",
            src: "hero5.png",
            prev: "#slide1",
            next: "#slide3",
            color: '',
            text: ''
        },
        {
            id: "slide3",
            src: "hero6.png",
            prev: "#slide2",
            next: "#slide4",
            color: '',
            text: ''
        },
        {
            id: "slide4",
            src: "hero7.png",
            prev: "#slide3",
            next: "#slide1",
            color: '',
            text: ''
        }
    ]

    // Variable pour le changement de slides
    const [slideIndex, setSlideIndex] = useState(0);

    const next = () => {
        setSlideIndex((prev) => (prev + 1) % carouselItems.length);
    };
    
    const prev = () => {
        setSlideIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 7000);

        return () => clearInterval(interval);
        // Le tableau vide signifie que ca declenche une seule fois 
    }, [])

    const slide = carouselItems[slideIndex];

    return (
        <div className="relative overflow-hidden w-full h-screen">

            {/* Images en bg */}
            <AnimatePresence mode='wait'>
                <motion.img
                    key={slide.id}
                    src={slide.src}
                    alt={slide.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.7 }}
                    className="absolute w-full h-7/10 object-cover object-right md:object-cover"
                />
            </AnimatePresence>

            {/* contenu */}
            <div className='absolute top-[20%] mx-10 max-w-xl z-10 px-5'>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id + "-text"}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* tu vas choisir la couleur du texte en fonction du font que tu auras
                                dans la variable color  */}
                        <h1 className={`text-3xl font-medium ${slide.color}`}>
                            <span className='font-extrabold'>Bienvenue </span> dans l'ère
                            {/* geres aussi la couleur ci stp, je ne connais toujours pas le code exacte, faudrait aussi se documenter sur une police plus pro  */}
                            <br /> de la <span className='font-extrabold text-blue-500'>médecine augmentée</span>.
                        </h1>

                        <br />
                        <hr />
                        <br />

                        <p className='text-xl leading-8 whitespace-pre-line'>
                            <strong>MedAssist+</strong> {slide.text}
                        </p>

                    </motion.div>
                </AnimatePresence>
            </div>

            {/* boutons de navigations */}
            <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={prev} aria-label='Slide precedent' className="btn btn-circle">❮</button>
                <button onClick={next} aria-label='Slide suivant' className="btn btn-circle">❯</button>

            </div>
        </div>

    )
}

export default Hero
