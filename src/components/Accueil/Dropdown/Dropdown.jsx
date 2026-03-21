import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({ children, to = "#", dropContent }) {
    const [active, setActive] = useState(false);

    // Verifions s'il ya un contenu avant de devoiler le drop-menu
    const show = dropContent && active;

    return (
        <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
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
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            style={{ translateX: "-50%" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute left-1/2 top-12 bg-white text-black"
                        >
                            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                            {dropContent}
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};


export function DropdownContent({ el1 = "", el2 = "", el3 = "", el4 = "", el5 = "", el6 = "", el7 = "" }) {
    return (
        <ul className='w-64 p-6 shadow-xl'>
            <li className='mb-3 space-y-3'>
                {/* il ne manquera plus  que l'animation underline */}
                <Link to="#" className='block text-sm'>{el1}</Link>
            </li>
            <li className='mb-3 space-y-3'>
                {/* il ne manquera plus  que l'animation underline */}
                <Link to="#" className='block text-sm'>{el2}</Link>
            </li>
            <li className='mb-3 space-y-3'>
                {/* il ne manquera plus  que l'animation underline */}
                <Link to="#" className='block text-sm'>{el3}</Link>
            </li><li className='mb-3 space-y-3'>
                {/* il ne manquera plus  que l'animation underline */}
                <Link to="#" className='block text-sm'>{el4}</Link>
            </li><li className='mb-3 space-y-3'>
                {/* il ne manquera plus  que l'animation underline */}
                <Link to="#" className='block text-sm'>{el5}</Link>
            </li><li className='mb-3 space-y-3'>
                {/* il ne manquera plus  que l'animation underline */}
                <Link to="#" className='block text-sm'>{el6}</Link>
            </li><li className='mb-3 space-y-3'>
                {/* il ne manquera plus  que l'animation underline */}
                <Link to="#" className='block text-sm'>{el7}</Link>
            </li>
        </ul>
    )
}