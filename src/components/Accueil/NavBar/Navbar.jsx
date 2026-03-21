import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';


const Navbar = ({ element1, element2, element3, element4, element5 }) => {
    return (
        <nav className='
            flex justify-center items-center
            fixed top-0 z-50
            w-full
            border-b-2 border-gray-200
            py-7
            '
        >
            <div className='
                flex
                justify-between
                m-auto
                w-full
                max-w-screen-2xl
                px-5
                xs:px-8
                sm:px-16
                '
            >
                {/* <Link to="/">Logo</Link> je dois creer le chemin plus tard avec react router dom */}
                <a href="">Logo</a>

                <button aria-label="Ouvrir le menu" className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>


                <ul className='
                    flex
                    justify-between
                    w-1/2
                    max-md:hidden
                    '
                >
                    <li>
                        <Link to={`/${element1}`}>{element1}</Link>
                    </li>
                    <li>
                        <Link>{element2}</Link>
                    </li>
                    <li>
                        <Link>{element3}</Link>
                    </li>
                    <li>
                        <Link>{element4}</Link>
                    </li>
                    <li>
                        <Link>{element5}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
