import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({ children, to = "#", dropContent }) {
    const [active, setActive] = useState(false);

    // Verifions s'il ya un contenu
    const hasContent = Boolean(dropContent);
    // Si content afficher
    const show = hasContent && active;

    // A mettre dans motion.div
    const dropdownVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.98 }
    };

    return (
        <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={() => setActive(prev => !prev)}
            className='relative w-fit h-fit'
        >
            <Link to={to} className='relative'>
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
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="backdrop-blur-sm bg-white/80 absolute left-1/2 top-12 -translate-x-1/2  text-black"
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


export function DropdownContent({ el1 = "", el2 = "", el3 = "", el4 = "", el5 = "", el6 = "", el7 = "" }) {

    // Faire un tableau dans accueil serait mieux, a faire au prochain push
    const items = [el1, el2, el3, el4, el5, el6, el7];

    return (
        <ul className='w-64 p-6 shadow-xl text-center'>

            {
                items.map((el, i) => (
                    <li key={i} className='mb-3 space-y-3 relative group'>
                        <Link to="#" className='block text-sm'>{el}</Link>
                        <span className="group-hover:w-full w-0 transition-all duration-300 ease-out h-1 rounded-xl bg-blue-500 absolute top-6 left-0"></span>
                    </li>
                ))
            }

        </ul>
    )
}