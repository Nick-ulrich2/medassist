export function Banniere(){
    return(
        <div className="flex items-end justify-center gap-2 w-full text-blue-950 my-5">
            <img src="/public/logo123.png" alt="" className="w-15"/>
            <div className="flex flex-col" style={{fontFamily: "Inter"}}>
                <div className="flex justify-start items-center">
                    <span className="text-4xl font-bold">MedAssist</span>
                    <div className="w-8 h-8">
                        <svg viewBox="0 0 48 48" >
                            <line x1="24" y1="12" x2="24" y2="24" stroke="#1e88e5" strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
                            <line x1="24" y1="24" x2="24" y2="36" stroke="#1e88e5" strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
                            <line x1="12" y1="24" x2="24" y2="24" stroke="#1e88e5" strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
                            <line x1="24" y1="24" x2="36" y2="24" stroke="#1e88e5" strokeWidth="7" strokeLinecap="square" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <span className="text-base font-bold italic">La santé partout et pour tous</span>
            </div>
        </div>
    )
}