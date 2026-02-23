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
                w-full
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
                duration-300
            ">
            <span className="md:mr-7" >{icone}</span>
            {text}
                
        </button>
    )
}