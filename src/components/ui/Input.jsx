
export function Input({ type, value, onChange, id, placeholder, icone }) {
    return (
        <div className="
            input
            flex 
            w-80
            border
            border-slate-300
            rounded-lg
            duration-400
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