import React from 'react'

const Hero = () => {

    // Au niveau des id, tu devras mettre le nom de chaque slide
    const carouselItems = [
        {
            id: "slide1",
            src: "background.png",
            prev: "#slide4",
            next: "#slide2",
            color: '',
            text : `est une plateforme révolutionnaire 
                    qui propose une solution hybride unique, 
                    combinant l’intelligence artificielle de pointe 
                    et des services de santé de proximité.`,
        },
        {
            id: "slide2",
            src: "background2.png",
            prev: "#slide1",
            next: "#slide3",
            color: '',
            text : ''
        },
        {
            id: "slide3",
            src: "background2.png",
            prev: "#slide2",
            next: "#slide4",
            color: '',
            text : ''
        },
        {
            id: "slide4",
            src: "background.png",
            prev: "#slide3",
            next: "#slide1",
            color: '',
            text : ''
        }
    ]

    return (
        <div className="carousel w-full max-h-screen">

            {
                carouselItems.map(({ id, src, prev, next, color, text }) => (
                    <div key={id} id={id} className="carousel-item relative w-full">
                        <img
                            src={src}
                            alt={id}
                            className="w-full h-screen object-cover"

                        />
                        <div className='absolute top-[20%] mx-10 px-5'>
                            {/* tu vas choisir la couleur du texte en fonction du font que tu auras
                                dans la variable color  */}
                            <h1 className={`text-3xl font-medium ${color}`}>
                                <span className='font-extrabold'>Bienvenue </span> dans l'ere
                                 {/* geres aussi la couleur ci stp, je ne connais toujours pas le code exacte, faudrait aussi se documenter sur une police plus pro  */}
                                <br /> de la <span className='font-extrabold text-blue-600'>medecine augmentee</span>.
                            </h1>

                            <br />
                            <hr />
                            <br />

                            <p className='text-xl leading-8 whitespace-pre-line'>
                                <strong>MedAssist+</strong> {text}
                            </p>
                        </div>
                        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={prev} aria-label='Slide precedent' className="btn btn-circle">❮</a>
                            <a href={next} aria-label='Slide suivant' className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Hero
