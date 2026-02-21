export function Button({buttonText, type, disabled}){
    return(
        <button 
            type={type}
            disabled={disabled}
            className="
                w-full
                py-1.5 lg:py-3
                my-4
                rounded-lg
                bg-blue-600
                text-white
                font-semibold
                text-xs lg:text-sm  
                hover:bg-blue-800
                md:px-8
                transition-colors
                duration-400
            ">
                {buttonText}
        </button>
    )
}

export function CodeButton({icone, text, type="button"}){
    return(
        <button 
            className="
                flex
                justify-center
                w-full
                py-1.5 lg:py-3
                rounded-lg
                font-semibold
                border-2
                border-blue-800
                bg-blue-50
                hover:text-white
                hover:bg-blue-700
                md:w-full
                transition-colors
                duration-400
            ">
            <span className="md:mr-5" >{icone}</span>
            <span 
                className="
                    whitespace-nowrap
                    text-[0.65rem]
                    md:text-sm
                " >{text}</span>
                
        </button>
    )
}