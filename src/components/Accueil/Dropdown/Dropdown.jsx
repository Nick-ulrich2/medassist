import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({ children, to = "#", dropContent }) {

    const [active, setActive] = useState(false);

    // Ajoutons une possibilte de cliquer en dehors pour fermer le dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".dropdown")) {
                setActive(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Si content afficher
    const show = dropContent && active;

    // Verifions s'il s'agit d'un mobile et reagissons en consequence
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // A mettre dans motion.div
    const dropdownVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.98 }
    };

    return (
        <div
            // onMouseEnter et onMouseLeave s'il s'agit d'un grand ecran et onclick s'il s'agit d'un mobile ou tablette 
            onMouseEnter={() => !isMobile && setActive(true)}
            onMouseLeave={() => !isMobile && setActive(false)}

            role="button" // div traitee comme un bouton, donc interactivite ajoutee
            aria-expanded={active} // indique au lecteur d'ecran si le drop est ouvert ou ferme
            aria-haspopup="true"
            tabIndex={0} // Permet de donner un focus avec la touche tab

            // Posibilite de l'utiliser a l'aide du clavier
            onKeyDown={(e) => {
                if (e.key === "Enter") setActive(prev => !prev);
                if (e.key === "Escape") setActive(false);
                if (e.key === " ") {
                    e.preventDefault();
                    setActive(prev => !prev);
                }
            }}

            className='dropdown relative w-fit h-fit z-[100]'
        >
            <Link
                to={to}
                className='relative'
                onClick={(e) => {
                    e.preventDefault();
                    isMobile && setActive(prev => !prev)
                }
                }
            >
                {children}
                <span
                    style={{
                        transform: show ? "scaleX(1)" : "scaleX(0)"
                    }}
                    className="
                        absolute 
                        -bottom-2 -left-2 -right-2 
                        h-1 
                        origin-left 
                        scale-x-0 
                        rounded-full 
                        bg-indigo-300 
                        transition-transform 
                        duration-300 ease-out
                    "
                />
            </Link>
            <AnimatePresence>
                {
                    show && (
                        <motion.div
                            variants={dropdownVariants}
                            style={{ originY: 0 }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="
                                backdrop-blur-sm 
                                bg-white/80 
                                max-lg:bg-black 
                                max-lg:text-white
                                max-lg:rounded-md 
                                absolute 
                                left-1/2 
                                -translate-x-1/2  
                                max-w-[90vw]
                            "
                        >
                            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                            <div className="backdrop-blur-sm bg-white/30 absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 " />
                            {dropContent}
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};


export function DropdownContent({ items = [] }) {

    return (
        <ul className='w-64 max-w-[90vw] p-6 shadow-xl text-center'>

            {
                items.map((el, i) => (
                    <li key={i} className='mb-3 space-y-3 relative group'>
                        <Link to="#" className='block text-base lg:text-sm'>{el}</Link>
                        <span className="group-hover:w-full w-0 transition-all duration-300 ease-out h-1 rounded-xl bg-blue-500 absolute top-6 left-0"></span>
                    </li>
                ))
            }

        </ul>
    )
}