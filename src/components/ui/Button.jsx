export function Button({ buttonText, type = "button", disabled }) {
    return (
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
        px-5 py-6
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
                
        ">
            <div className="flex-none">{leftIcon}</div>
            <div className="flex-1">
                <h1 className="font-bold textlg ">
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