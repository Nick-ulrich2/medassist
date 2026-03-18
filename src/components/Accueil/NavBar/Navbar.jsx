import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
                    justify-center
                    gap-x-3
                    max-md:hidden
                    md:gap-x-10'
                >
                    <li><a href="/"> element 1</a></li>
                    <li><a href="/"> element 1</a></li>
                    <li><a href="/"> element 1</a></li>
                    <li><a href="/"> element 1</a></li>
                    <li><a href="/"> element 1</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
