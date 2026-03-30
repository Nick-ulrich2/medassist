export function Banniere({w1="w-15", w2="w-8", h="h-8", size1 = "text-4xl", size2="text-[14px]"}){
    return(
        <div className="flex items-end justify-center gap-x-2 w-fit text-blue-950">
            <img src="/logo123.png" alt="Logo MedAssist+" className={`${w1}`}/>
            <div className="flex flex-col" >
                <div className="flex justify-start items-center opacity-90">
                    <span className={`${size1} font-black font-sans `} >MedAssist</span>
                    <PlusIcon size={`${w2} ${h}`} />
                </div>
                <span className={`${size2} tracking-tighter font-bold italic`}>La santé partout et pour tous</span>
            </div>
        </div>
    )
}

export function SimpleBanniere(){
    return (
        <div>
            <div className="flex items-center justify-center gap-2 w-full text-blue-950 py-5">
                <img src="/logo123.png" alt="Logo MedAssist+" className="w-15"/>
                <div className="flex justify-start items-center opacity-90">
                    <span className="text-4xl font-black font-sans ">MedAssist</span>
                    <PlusIcon/>
                </div>
            </div>
        </div>
    )
}

export function PlusIcon({ size = "w-8 h-8", color = "#1e88e5" }) {
    return (
        <div className={size}>
            <svg viewBox="0 0 48 48" >
                <line x1="24" y1="12" x2="24" y2="24" stroke={color} strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
                <line x1="24" y1="24" x2="24" y2="36" stroke={color} strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
                <line x1="12" y1="24" x2="24" y2="24" stroke={color} strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
                <line x1="24" y1="24" x2="36" y2="24" stroke={color} strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}