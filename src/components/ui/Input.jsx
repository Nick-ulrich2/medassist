
export function Input({ type = "text", value, onChange, id, placeholder, icone = "" }) {
    return (
        <div className="
            input
            flex 
            w-full h-12
            mb-3
            border border-gray-300
            bg-gray-50 text-gray-800 placeholder-gray-400
            rounded-[10px]
            shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]
            transition-all duration-100
            focus:outline-none
            focus:bg-white
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-200
        ">
            {/*
      focus-within:ring-2  ceci permet de mettre le focus sur l'element clique
      focus-within:ring-blue-500  ceci permet de donner la couleur */}
            <label
                htmlFor={id}
                className="
                    pr-2
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
                    text-md
                    outline-none
                "
            />
        </div>
    )
}

export function InputPassword({ type, value, onChange, id, placeholder, icone1, icone2 }) {
    return (
        <div className="
            input
            flex 
            w-full h-12
            mb-3
            border border-gray-300
            rounded-[10px]
            bg-gray-50 text-gray-800 placeholder-gray-400
            shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]
            transition-all
            focus:outline-none
            focus:bg-white
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-100
            duration-100
        ">
            {/*
      focus-within:ring-2  ceci permet de mettre le focus sur l'element clique
      focus-within:ring-blue-500  ceci permet de donner la couleur */}
            <label
                htmlFor={id}
                className="
                    pr-2
                    text-slate-800
                "
            >
                {icone1}
            </label>

            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    text-md
                    outline-none
                "
            />

            <label
                htmlFor={id}
                className="
                    pl-2
                    text-slate-800
                "
            >
                {icone2}
            </label>
        </div>
    )
}