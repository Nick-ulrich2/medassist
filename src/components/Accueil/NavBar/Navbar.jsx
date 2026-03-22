import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Banniere } from '../../ui/Banniere';
import clsx from "clsx"; // une librairie permettant d'organiser un peu les classes


const Navbar = ({ items }) => {

    const [open, setOpen] = useState(false);

    // cette fonction verifie et change l'etat de la variable ou du bouton qui sera clique
    const handleClick = () => setOpen(prev => !prev);


    return (
        <nav className='
            flex justify-center items-center
            fixed top-0 z-50
            w-full
            border-b-2 border-gray-200
            py-4
            '
        >
            <div className='
                flex justify-between items-center    
                w-full max-w-screen-2xl
                px-5
                xs:px-8
                sm:px-16
                '
            >
                <Banniere w1='w-10' w2='w-5.5' h='h-5.5' size1='text-2xl' size2='text-[10px]' />

                <button
                    onClick={handleClick}
                    aria-label="Ouvrir le menu"
                    aria-expanded={open}
                    className='md:hidden relative'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>


                <ul className={clsx(
                    "flex justify-between items-center w-1/2",
                    "max-md:right-0 max-md:flex-col max-md:w-full max-md:h-fit max-md:absolute max-md:top-25 max-md:text-xl max-md:font-semibold max-md:shadow-xl max-md:transition-transform max-md:ease-out max-md:duration-300",
                    open ? "max-md:flex " : "max-md:hidden"
                )}

                >
                    {
                        items.map((item, index) => (
                            <li key={index} className={`${item.link && "group"} relative max-md:my-4`}>
                                {
                                    item.link &&
                                    <span className="group-hover:scale-x-100 scale-x-0 transition-transform duration-300 ease-out h-1 rounded-xl bg-blue-500 absolute -bottom-1 origin-left left-0 w-full"></span>
                                }
                                {item.link ? (
                                    <Link to={item.link}>{item.label}</Link>
                                ) : (
                                    item.label
                                )}
                            </li>
                        ))
                    }

                    {/* <span className="group-hover:w-full w-0 transition-all duration-300 ease-out h-1 rounded-xl bg-blue-500 absolute top-6 left-0"></span> */}

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
