import { Link, useLocation } from "react-router-dom"

export function Button({ buttonText, type = "button", disabled }) {

    // Variable qui contient toutes les infos en rapport avec la position actuelle
    const location = useLocation();

    let position = "";

    if(location.pathname == "/Page3"){
        position = "/Page4";
    }
    else if(location.pathname == "/Page4"){
        position = "/Page5";
    }
    else if(location.pathname == "/Page5"){
        position = "/PageSecrete";
    }
    else if(location.pathname == "/PageSecrete"){
        position = "/Page6";
    }
    else if(location.pathname == "/Page6"){
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
                btn-block
                px-5 py-3
                bg-blue-500
                text-lg font-bold text-white
                rounded-xl
                transition-all
                duration-300
                cursor-pointer
                hover:bg-blue-700
                hover:scale-y-105
                "
        >
            {buttonText}
        </Link>
    )
}

export function CodeButton({ icone, text, type = "button" }) {
    return (
        <button
            className="
                btn
                bg-blue-100
                text-black
                border-2
                border-blue-800
                rounded-lg
                btn-block
                hover:bg-blue-800
                hover:text-white
                transition-colors
                duration-300
            ">
            <span className="md:mr-7" >{icone}</span>
            {text}

        </button>
    )
}

export function RegisterButton({ leftIcon, title, description = "", rightIcon }) {
    return (
        <a href="#" className="
                btn
                btn-block
                px-5 py-8
                mb-3
                bg-white
                border-blue-700
                text-black
                rounded-xl
                transition-all
                duration-300
                cursor-pointer
                hover:bg-blue-700
                hover:text-white
                hover:scale-105       
            "
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
        </a>
    )
}