import { Link, useLocation } from "react-router-dom"

const baseBtn = "btn btn-block max-lg:h-14 transition-all duration-200 ease-in-out shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:scale-102 active:scale-97 active:shadow-inner";

export function Button({ buttonText, type = "button", disabled }) {

    // Variable qui contient toutes les infos en rapport avec la position actuelle
    const location = useLocation();

    // Objet permettant d'attribuer le chemin d'acces de la prochaine page aux boutyons actuels
    const pageMap = {
        "/Page3": "/Page4",
        "/Page4": "/Page5",
        "/Page5": "/PageSecrete",
        "/PageSecrete": "/Page6",
        "/Page6": "/Page7",
    };

    // Attribution
    const nextPage = pageMap[location.pathname] || "/";

    return (
        <button

            type={type}
            disabled={disabled}

            // Naviguons en fonction de l'url
            onClick={() => !disabled && navigate(nextPage)}

            /**
             * btn-block == w-full
             * btn-primary == bg-blue-600 + son hover + epaisseur du texte + text-color
             */
            className={`
                ${baseBtn}
                px-5 py-3
                bg-blue-600
                border-2 border-blue-800
                text-lg max-lg:text-xl font-bold text-white
                rounded-xl
                cursor-pointer

                hover:bg-blue-700
                
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `
            }
        >
            {buttonText}
        </button>
    )
}

export function SimpleButton({ buttonText, type = "button", disabled }) {  //N'est pas un bouton block
    // Variable qui contient toutes les infos en rapport avec la position actuelle
    const location = useLocation();

    let position = "";

    if (location.pathname == "/Page3") {
        position = "/Page4";
    }
    else if (location.pathname == "/Page4") {
        position = "/Page5";
    }
    else if (location.pathname == "/Page5") {
        position = "/PageSecrete";
    }
    else if (location.pathname == "/PageSecrete") {
        position = "/Page6";
    }
    else if (location.pathname == "/Page6") {
        position = "/Page7";
    }

    return (
        <Link
            // Naviguons en fonction de l'url
            to={position}
            type={type}
            disabled={disabled}

            /**
             * btn-block == w-full
             * btn-primary == bg-blue-600 + son hover + epaisseur du texte + text-color
             */
            className="
                btn 
                px-10 py-6
                bg-blue-700
                border-2 border-blue-800
                text-lg font-bold text-white
                rounded-full
                transition-all
                duration-200
                ease-in-out
                cursor-pointer
                shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]

                hover:bg-blue-700
                hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
                hover:scale-102

                active:scale-97
                active:shadow-inner
                "
        >
            {buttonText}
        </Link>
    )
}

export function CodeButton({ icone = "", text, type = "button" }) {
    return (
        <button
            className={`
                ${baseBtn}
                bg-blue-100
                text-black
                border-2 border-blue-800
                rounded-lg
                cursor-pointer
                max-lg:text-xl
            
                hover:bg-blue-800
                hover:text-white
            
            `}>
            <span className="md:mr-3" >{icone}</span>
            {text}

        </button>
    )
}

export function RegisterButton({ leftIcon, title, description = "", rightIcon }) {
    return (
        <Link to="#" aria-label={title} className={`
                ${baseBtn}
                px-5 py-8
                mb-3
                bg-white
                border-blue-700
                text-black
                rounded-xl
                cursor-pointer

                hover:bg-blue-700
                hover:text-white
            `}
        >
            <div className="flex-none">{leftIcon}</div>
            <div className="flex-1">
                <h1 className="font-bold text-lg ">
                    {title}
                </h1>
                <p className="text-xs font-medium">
                    {description}
                </p>
            </div>
            <div className="flex-none">{rightIcon}</div>
        </Link>
    )
}