export function Button({buttonText, type, disabled}){
    return(
        <button 
            type={type}
            disabled={disabled}

            /**
             * btn-block == w-full
             * btn-primary == bg-blue-600 + son hover + epaisseur du texte + text-color
             */
            className="
                btn 
                btn-block
                bg-blue-800
                opacity-80
                hover:opacity-100
                text-lg
                text-white
                rounded-lg
                transition-colors
                duration-500
                "
            >
                {buttonText}
        </button>
    )
}

export function CodeButton({icone, text, type="button"}){
    return(
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
                duration-500
            ">
            <span className="md:mr-7" >{icone}</span>
            {text}
                
        </button>
    )
}