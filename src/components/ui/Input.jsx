

export function InputWrapper({ children, id, icone1, icone2}) {
    return (
        <div className="
            input
            flex 
            w-full h-12 max-lg:h-15
            mb-3 px-2 max-lg:px-5
            border border-gray-300
            bg-gray-50 text-gray-800 placeholder-gray-400
            rounded-xl
            shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]
            transition-all duration-100
            focus:outline-none
            focus:bg-white
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-200
            items-center gap-2
        ">
            {
                icone1 && <label
                    htmlFor={id}
                    className="
                    pr-2
                    text-slate-800
                "
                >
                    {icone1}
                </label>
            }
            {children}
            {
                icone2 && <label
                    htmlFor={id}
                    className="
                    pl-2
                    text-slate-800
                "
                >
                    {icone2}
                </label>
            }
        </div>
    )
}


export function Input({ type = "text", value, onChange, id, placeholder, icone = "" }) {
    return (
        <InputWrapper icone1={icone} id={id}>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    text-md max-lg:text-lg
                    outline-none
                "
            />
        </InputWrapper>
    )
}

export function InputPassword({ type, value, onChange, id, placeholder, icone1, icone2 }) {
    return (
        <InputWrapper icone1={icone1} icone2={icone2} id={id} >
            <input
                type={type}
                aria-label="Mot de passe"
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    text-md max-lg:text-lg
                    outline-none
                "
            />
        </InputWrapper>
    )
}