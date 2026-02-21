
export function Input({type, value, onChange, id, placeholder, icone}){
    return(
        <div className="
            flex 
            items-center
            gap-3
            my-2
            p-1.5 md:p-2
            w-full
            md:w-auto
            md:px-4 
            shadow-md
            border
            border-slate-300
            rounded-lg
            focus-within:ring-2
            focus-within:ring-blue-500
            transition-focus-within
            duration-400
        ">
            {/*
      focus-within:ring-2  ceci permet de mettre le focus sur l'element clique
      focus-within:ring-blue-500  ceci permet de donner la couleur */}
            <label
                htmlFor={id}
                className="
                    pr-2
                    mr-2
                    text-slate-800
                "
            >
                {icone}
            </label>
            <input 
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full
                    outline-none
                    text-[0.65rem]
                "  
            />
        </div>
    )
}